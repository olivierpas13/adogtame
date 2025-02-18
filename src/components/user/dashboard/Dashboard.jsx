"use client";

import { FaBell, FaDog, FaHeart, FaHandHoldingHeart } from "react-icons/fa";
import Image from "next/image";
import { useSession } from "@/lib/auth-client";
import moment from "moment";
import { useEffect, useState } from "react";
const Dashboard = () => {
  const { data: session } = useSession();

  const [user, setUser] = useState();

  useEffect(() => {
    setUser(session?.user);
  }, [session]);

  // Convert timestamp to date using moment
  const memberSince = moment(user?.createdAt)
    .locale("es")
    .format("DD [de] MMMM [de] YYYY");

  // Stats data
  const stats = [
    {
      title: "Nuevas notificaciones",
      value: 5,
      icon: <FaBell className="w-6 h-6" />,
    },
    {
      title: "Perros en adopción",
      value: 3,
      icon: <FaDog className="w-6 h-6" />,
    },
    {
      title: "Perros como favoritos",
      value: 15,
      icon: <FaHeart className="w-6 h-6" />,
    },
    {
      title: "Perros patrocinados",
      value: 7,
      icon: <FaHandHoldingHeart className="w-6 h-6" />,
    },
  ];

  return (
    <div>
      {user && (
        <div className="p-6 space-y-8 flex flex-col items-center">
          {/* Header Section */}
          <div className="flex flex-col rounded-lg w-4/5 justify-center items-center pb-4 shadow-lg p-10">
            <h1 className="text-4xl font-bold mb-3">{user.name}</h1>
            <h2 className="text-gray-500 mb-3">{user.email}</h2>

            <div className="bg-black mask mask-hexagon h-56 w-56 rounded-lg border-red-300 relative">
              <Image
                className="bg-black mask mask-hexagon"
                src={user.image}
                fill
                alt="Imagen de perfil"
              />
            </div>
            <p className="text-gray-400 mt-5">
              Miembro de{" "}
              <span className="text-secondary font-bold">ADOGTAME </span>desde:
            </p>
            <p className="mt-2"> {memberSince}</p>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-4 w-4/5 grid-cols-2 shadow  bg-base-100">
            {stats.map((stat, index) => (
              <div key={index} className="stat shadow-md rounded-2xl col-span-1 text-center">
                <div className="stat-title">{stat.title}</div>
                <div className="flex flex-row justify-center items-center">
                  <div className="stat-value text-primary mr-7">{stat.value}</div>
                  <div className="stat-figure text-secondary">{stat.icon}</div>
                </div>
              </div>
            ))}
          </div>

          {/* User's Dogs Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Tus Perros</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
