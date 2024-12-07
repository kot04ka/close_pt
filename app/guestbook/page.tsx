import Form from "../components/Form";
import prisma from "../db";

interface Order {
  service: string;
  price: string;
  id: string;
}

async function getOrders() {
  const data = await prisma.order.findMany({
    take: 10,
    orderBy: {
      created_at: "desc",
    },
  });
  return data;
}

export const revalidate = 60;

export default async function Orders() {
  const data = await getOrders();

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5 text-center">
        <h1 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Order Price List
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Choose from our available services and get started with your project.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {data.map((order: Order) => (
          <div
            key={order.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col justify-between"
          >
            <h3 className="text-2xl font-bold text-teal-500 mb-2">
              {order.service}
            </h3>
            <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Price: {order.price}$
            </p>
            <button
              className="mt-auto px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition"
              onClick={() => {
                // Обработка заказа
                alert(`Заказан сервис: ${order.service}`);
              }}
            >
              Заказать
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Place Your Order</h2>
        <Form />
      </div>
    </div>
  );
}
