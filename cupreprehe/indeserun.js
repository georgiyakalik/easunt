function timeFormatDefaultLocale(definition) {
  const date = new Date(definition);
  const locale = getLocale();
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  return date.toLocaleString(locale, options);
}
