'use client';
import type { data } from './fake-data';

export function TaskComponent({ items }: { items: typeof data }) {
  return (
    <>
      <ul>
        {items.map((data) => (
          <li key={data.userName + data.firstName}>{data.userName}</li>
        ))}
      </ul>
    </>
  );
}
