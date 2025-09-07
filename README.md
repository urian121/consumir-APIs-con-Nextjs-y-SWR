# 🚀 Consumiendo APIs en Next.js 15 con SWR + Axios (sin useEffect/useState)

Guía práctica para aprender a consumir APIs en **Next.js** usando
**SWR** y **Axios**, evitando el uso manual de `useEffect` y `useState`.

## 📦 1. Instalación

Instala las dependencias necesarias:

``` bash
npm install swr axios
# o
yarn add swr axios
```

## ⚙️ 2. Configuración del Fetcher

Crea un archivo `lib/fetcher.js` para centralizar las peticiones con
Axios:

``` js
// lib/fetcher.js
import axios from "axios";

export const fetcherAxios = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data; // normalizamos la respuesta para SWR
  } catch (err) {
    throw err.response?.data || new Error(err.message);
  }
};
```


## 💻 3. Uso en un Componente

Ejemplo en `src/app/page.js`:

``` jsx
"use client";

import useSWR from "swr";
import { fetcherAxios } from "@/lib/fetcher";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    "https://devsapihub.com/api-users",
    fetcherAxios
  );

  if (isLoading) return <p>Cargando usuarios...</p>;
  if (error) return <p>Error al cargar usuarios 😢</p>;

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">Lista de Usuarios</h1>
      <ul className="space-y-2">
        {data?.map((user) => (
          <li key={user.id} className="p-2 border rounded">
            {user.name}
          </li>
        ))}
      </ul>
    </main>
  );
}
```

## ⚡ 4. Características principales de SWR

-   🔄 **Caché automática**: guarda y comparte datos entre componentes.\
-   ♻️ **Revalidación**: actualiza datos en segundo plano.\
-   🚨 **Manejo de errores**: integrado y sencillo.\
-   🔁 **Reintentos automáticos**: en caso de error de red.\
-   ⏱ **Polling**: actualizaciones periódicas con `refreshInterval`.\
-   🧩 **Prefetching**: carga anticipada de datos al pasar el mouse
    sobre enlaces.

## 🎯 Ventajas de usar SWR

-   ✅ Código más limpio y legible.
-   ✅ Menos boilerplate comparado con `useEffect` + `useState`.
-   ✅ Mejor experiencia de usuario con datos siempre frescos.
-   ✅ Optimización de rendimiento automática.
-   ✅ Compatible con REST y GraphQL.


