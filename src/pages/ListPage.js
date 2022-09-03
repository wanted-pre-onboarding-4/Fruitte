import List from '../components/fruitstore/list/List';
export default function ListPage() {
  const product = useRecoilValue(productAtom);

  useEffect(() => {
    console.log(product);
  });
  return <List />;
}
