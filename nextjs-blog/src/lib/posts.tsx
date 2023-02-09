export default interface Data {
  id: string;
  title: string;
  date: string;
}
export function getSortedPostsData(): Data[] {
  const allPostsData: Data[] = [
    {
      id: "1",
      title: "Hello world!",
      date: "2023-02-07",
    },
    {
      id: "2",
      title: "React js",
      date: "2023-02-06",
    },
  ];
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
