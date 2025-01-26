'use client';

import PaginaGenerica from "@/app/sistema/components/datos_components/PaginaGenerica";
import { getChoferes, deleteChoferes, postChofer, putChofer } from "@/api/mantenimiento/choferes.api";
export default function ClientesPage() {
    return (
        <PaginaGenerica
            nombrePagina="Choferes"
            iconoPagina={
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="currentColor" fillRule="evenodd" d="M15 9.5c0-.437 4.516-3.5 9-3.5s9 3.063 9 3.5c0 1.56-.166 2.484-.306 2.987c-.093.33-.402.513-.745.513H16.051c-.343 0-.652-.183-.745-.513C15.166 11.984 15 11.06 15 9.5m7.5-.5a1 1 0 1 0 0 2h3a1 1 0 0 0 0-2zm-6.462 10.218c-3.33-1.03-2.49-2.87-1.22-4.218H33.46c1.016 1.298 1.561 3.049-1.51 4.097a8 8 0 1 1-15.912.12m7.69.782c2.642 0 4.69-.14 6.26-.384a6 6 0 1 1-11.98.069c1.463.202 3.338.315 5.72.315M32.417 34.6A9.992 9.992 0 0 0 24 30a9.992 9.992 0 0 0-8.42 4.602a2.49 2.49 0 0 0-1.447-1.05l-1.932-.517a2.5 2.5 0 0 0-3.062 1.767L8.363 37.7a2.5 2.5 0 0 0 1.768 3.062l1.931.518A2.492 2.492 0 0 0 14 41.006A1 1 0 0 0 16 41v-1c0-.381.027-.756.078-1.123l5.204 1.395a3 3 0 0 0 5.436 0l5.204-1.395c.051.367.078.742.078 1.123v1a1 1 0 0 0 2 .01c.56.336 1.252.453 1.933.27l1.932-.517a2.5 2.5 0 0 0 1.768-3.062l-.777-2.898a2.5 2.5 0 0 0-3.062-1.767l-1.932.517a2.49 2.49 0 0 0-1.445 1.046m-15.814 2.347A8.008 8.008 0 0 1 23 32.062v4.109a3.007 3.007 0 0 0-1.88 1.987zm14.794 0A8.009 8.009 0 0 0 25 32.062v4.109c.904.32 1.61 1.06 1.88 1.987zM24 40a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clipRule="evenodd"></path></svg>
            }
            fetchData={getChoferes}
            createData={postChofer}
            updateData={putChofer}
            deleteData={deleteChoferes}
            formFieldsConfig={() => [

                { label: "Nombre", key: "nombre_chofer", example: 'Nombre del cliente', type: 'text' },
                { label: "C.I.", key: "ruc_chofer", example: '17xxxxxxxx', type: 'text' },
                { label: "Placas Camion", key: "placas_camion", example: 'PFFXXX', type: 'text' },
                { label: "Telefono Chofer", key: "telefono_chofer", example: '09xxxxxxxx', type: 'text' },
                { label: "Camión", key: "camion", example: 'FTR', type: 'text' },
                { label: "Estado Chofer", key: "estado_chofer", type: 'checkbox' },
            ]}
            visibleColumns={{
                nombre_chofer: "Nombre",
                ruc_chofer: "C.I.",
                placas_camion: "Placas Camion",
                telefono_chofer: "Telefono Chofer",
                camion: "Camión",
                estado_chofer: "Estado Chofer",
            }}
            modificationLabelId={{ label: "ID Chofer", key: "id_chofer" }}
            formClassName="grid-cols-3 max-lg:grid-cols-2" // Clases para el diseño de las columnas
        />
    );
}
