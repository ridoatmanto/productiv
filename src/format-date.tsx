function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

export default function FormatDate(props: { props: Date }) {
  let date = new Date();
  if (props !== null) {
    date = new Date(props.toString());
  }
  return formatDate(date);
}
