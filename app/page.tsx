import Image from 'next/image';
import { TaskComponent } from './Task';
import { data } from './fake-data';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TaskComponent items={data} />
    </main>
  );
}
