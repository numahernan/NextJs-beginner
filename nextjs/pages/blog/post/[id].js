import { useRouter } from "next/router";
import Alert from '../../../components/alert'

export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  return   <Alert type="success">Post: {id}  </Alert>
}