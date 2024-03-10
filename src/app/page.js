import Mainav from '../components/mainav'
import Note from '../components/note'
import Services from '../components/services'
import Contact from '../components/contact'
import Cv from '../components/cv'
export default function Home() {
  return (
    <main>
      <Mainav/>
      <Note/>
      <Services/>
      <Contact/>
      <Cv/>
    </main>
  );
}
