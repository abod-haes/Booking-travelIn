// ordersApi.js

import { Databases } from "appwrite";
import client from "@/config/appwrite.config";
import { getIdCookie } from "@/utils/cookies";

let orders:any = [];
export async function fetchOrders() {
  const auth = getIdCookie();
  const databases = new Databases(client);
  const databaseId = "6521556c832812e46e11";

  try {
    const response = await databases.listDocuments(databaseId, "653a4115236682a519cd");
    const documents = response?.documents || [];
    const filteredDocuments = documents.filter((item) => item.idOrder === auth);
    orders = filteredDocuments.map((item) => ({
      id: item.$id,
      img: item.img,
      cost: item.cost,
      name: item.country,
      idOrder: item.idOrder,
      date: item.date,
      country: item.country,
      numberOfSiet: item.numberOfSiet,
      time: item.time,
    }));
  } catch (error) {
    console.log("Error:", error);
  }

  return orders;
}

export async function deleteOrder(orderId :any) {
  const databases = new Databases(client);
  const databaseId = "6521556c832812e46e11";

  try {
    await databases.deleteDocument(databaseId, '653a4115236682a519cd', orderId);
  } catch (error) {
    console.log("Error:", error);
  }
}