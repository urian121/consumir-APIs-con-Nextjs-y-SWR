"use client";

import useSWR from "swr";
import { fetcherAxios } from "@/lib/fetcher";
import Image from "next/image";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    "https://devsapihub.com/api-users",
    fetcherAxios
  );


  return (
    <main className="p-6">

      <div className="container">
      <div className="container py-4">
        <h1 className="text-center mb-4 mt-4 fw-bold">
          Consumir APIs con Next.js y SWR
        </h1>
        <p className="text-center mb-4">Aprender a consumir APIs con Next.js y SWR sin necesidad de hacer usar useEffect o useState</p>


        <br />
        <br />
        <h2 className="text-center mb-4 mt-4 fw-bold">
          🧑‍💻 Lista de Usuarios Conectados
        </h2>

        <div id="user-list" className="list-group bg-dark shadow">
          <section className="text-center">
            {isLoading && <p>Cargando usuarios...</p>}
            {error && <p>Error al cargar usuarios 😢</p>}
          </section>
          
          {data?.map((user) => (
              <div key={user.id} className="list-group-item user-item">
                <span className="badge rounded-pill message-badge user-year">{user.year}</span>

                <div className="user-info">
                  <div className="avatar-wrapper">
                    <Image src={user.avatar_url} alt={user.name} className="user-avatar" width={50} height={50} />
                    <span className="status-dot status-online"></span>
                  </div>
                  <div className="user-details">
                    <strong>{user.name}</strong>
                    <small className="text-muted">{user.email}</small>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      </div>
    </main>
  );
}
