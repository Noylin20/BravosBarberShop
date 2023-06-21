export const formatCurrency = price =>
  Number(price).toLocaleString('es-CR', {
    style: 'currency',
    currency: 'CRC'
  });