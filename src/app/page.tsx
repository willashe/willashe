import Image from 'next/image';
import { Assistant } from 'next/font/google';
import styles from './page.module.scss';

const assistant = Assistant({ subsets: ['latin'] });

export default function Home() {
  const { main, banner, container, contact, grid, verticalRule } = styles;
  const assistantClassName = assistant.className;

  return (
    <main className={`${main} ${assistantClassName}`}>
      <div className={banner} />

      <div className={container}>
        <div className={contact}>
          <h1>Will Ashe</h1>
          <h2>
            Software Engineer
            <br />
            Austin, TX
          </h2>
          <a
            href="https://www.linkedin.com/in/will-ashe"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/willashe"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
