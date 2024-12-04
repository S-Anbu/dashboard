import React from "react";

const DashboardCard = ({ icon, count, label, bgColor, iconColor }) => {
  return (
    <div
      className={`flex items-center justify-between p-4 rounded-lg shadow-sm ${bgColor}`}
    >
      <div
        className={`flex items-center justify-center w-12 h-12  rounded-full ${iconColor}`}
      >
        {icon}
      </div>
      <div className="text-right">
        <h3 className="text-2xl font-bold">{count}</h3>
        <p className="text-gray-500">{label}</p>
      </div>
    </div>
  );
};

const Card = () => {
  const stats = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="white" d="m9.5 16.5l7-4.5l-7-4.5zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"/></svg>,
      count: "957",
      label: "Enrolled Courses",
      bgColor: "bg-red-50",
      iconColor: "bg-red-400",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><mask id="ipSCheckCorrect0"><g fill="none"><g stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" clip-path="url(#ipSCheckCorrect1)"><path d="M42 20v19a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h21"/><path d="m16 20l10 8L41 7"/></g><defs><clipPath id="ipSCheckCorrect1"><path fill="#000" d="M0 0h48v48H0z"/></clipPath></defs></g></mask><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSCheckCorrect0)"/></svg>,
      count: "19",
      label: "Active Courses",
      bgColor: "bg-purple-50",
      iconColor: "bg-purple-400",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M3.36 9.977a5.5 5.5 0 0 0-.923 3.05V14a.5.5 0 1 1-1 0v-.972A6.5 6.5 0 0 1 2.53 9.422l.108-.162a.5.5 0 1 1 .832.555z"/><path d="M6.18 8.365c-1.09 0-2.107.544-2.711 1.45l-.832-.554a4.26 4.26 0 0 1 3.542-1.896h.22a.5.5 0 0 1 0 1zm3.078 1.6c.47.706.721 1.534.721 2.382h1a5.3 5.3 0 0 0-.889-2.936l-.1-.15a.5.5 0 1 0-.832.554z"/><path d="M6.448 8.365c1.089 0 2.106.544 2.71 1.45l.832-.554a4.26 4.26 0 0 0-3.542-1.896h-.22a.5.5 0 1 0 0 1z"/><path d="M6.25 7.25a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5m0 1a3.25 3.25 0 1 0 0-6.5a3.25 3.25 0 0 0 0 6.5m4.259 4.936a5.5 5.5 0 0 0-.924 3.051v1.034a.5.5 0 1 1-1 0v-1.034a6.5 6.5 0 0 1 1.091-3.605l.133-.2a.5.5 0 0 1 .832.556z"/><path d="M13.42 11.5a3.34 3.34 0 0 0-2.78 1.488l-.831-.555A4.34 4.34 0 0 1 13.42 10.5h.224a.5.5 0 1 1 0 1zm3.187 1.686a5.5 5.5 0 0 1 .924 3.051v1.034a.5.5 0 1 0 1 0v-1.034a6.5 6.5 0 0 0-1.092-3.605l-.133-.2a.5.5 0 1 0-.832.556z"/><path d="M13.695 11.5a3.34 3.34 0 0 1 2.78 1.488l.832-.555a4.34 4.34 0 0 0-3.612-1.933h-.225a.5.5 0 1 0 0 1z"/><path d="M13.5 10.5a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5m0 1a3.25 3.25 0 1 0 0-6.5a3.25 3.25 0 0 0 0 6.5"/></g></svg>,
      count: "241",
      label: "Course Instructors",
      bgColor: "bg-orange-50",
      iconColor: "bg-orange-400",
    },
    {
      icon:<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1024 1024"><path fill="currentColor" d="M918.4 201.6c-6.4-6.4-12.8-9.6-22.4-9.6H768V96c0-9.6-3.2-16-9.6-22.4S745.6 64 736 64H288c-9.6 0-16 3.2-22.4 9.6S256 86.4 256 96v96H128c-9.6 0-16 3.2-22.4 9.6S96 217.6 96 224c3.2 108.8 25.6 185.6 64 224c34.4 34.4 77.56 55.65 127.65 61.99c10.91 20.44 24.78 39.25 41.95 56.41c40.86 40.86 91 65.47 150.4 71.9V768h-96c-9.6 0-16 3.2-22.4 9.6S352 790.4 352 800s3.2 16 9.6 22.4s12.8 9.6 22.4 9.6h256c9.6 0 16-3.2 22.4-9.6s9.6-12.8 9.6-22.4s-3.2-16-9.6-22.4s-12.8-9.6-22.4-9.6h-96V637.26c59.4-7.71 109.54-30.01 150.4-70.86c17.2-17.2 31.51-36.06 42.81-56.55c48.93-6.51 90.02-27.7 126.79-61.85c38.4-38.4 60.8-112 64-224c0-6.4-3.2-16-9.6-22.4M256 438.4c-19.2-6.4-35.2-19.2-51.2-35.2c-22.4-22.4-35.2-70.4-41.6-147.2H256zm390.4 80C608 553.6 566.4 576 512 576s-99.2-19.2-134.4-57.6S320 438.4 320 384V128h384v256q0 81.6-57.6 134.4m172.8-115.2c-16 16-32 25.6-51.2 35.2V256h92.8c-6.4 76.8-19.2 124.8-41.6 147.2M768 896H256c-9.6 0-16 3.2-22.4 9.6S224 918.4 224 928s3.2 16 9.6 22.4s12.8 9.6 22.4 9.6h512c9.6 0 16-3.2 22.4-9.6s9.6-12.8 9.6-22.4s-3.2-16-9.6-22.4s-12.8-9.6-22.4-9.6"/></svg>,
      count: "951",
      label: "Completed Courses",
      bgColor: "bg-green-50",
      iconColor: "bg-green-400",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M256 48C148.5 48 60.1 129.5 49.2 234.1c-.8 7.2-1.2 14.5-1.2 21.9 0 7.4.4 14.7 1.2 21.9C60.1 382.5 148.5 464 256 464c114.9 0 208-93.1 208-208S370.9 48 256 48zm135.8 326.1c-22.7-8.6-59.5-21.2-82.4-28-2.4-.7-2.7-.9-2.7-10.7 0-8.1 3.3-16.3 6.6-23.3 3.6-7.5 7.7-20.2 9.2-31.6 4.2-4.9 10-14.5 13.6-32.9 3.2-16.2 1.7-22.1-.4-27.6-.2-.6-.5-1.2-.6-1.7-.8-3.8.3-23.5 3.1-38.8 1.9-10.5-.5-32.8-14.9-51.3-9.1-11.7-26.6-26-58.5-28h-17.5c-31.4 2-48.8 16.3-58 28-14.5 18.5-16.9 40.8-15 51.3 2.8 15.3 3.9 35 3.1 38.8-.2.7-.4 1.2-.6 1.8-2.1 5.5-3.7 11.4-.4 27.6 3.7 18.4 9.4 28 13.6 32.9 1.5 11.4 5.7 24 9.2 31.6 2.6 5.5 3.8 13 3.8 23.6 0 9.9-.4 10-2.6 10.7-23.7 7-58.9 19.4-80 27.8C91.6 341.4 76 299.9 76 256c0-48.1 18.7-93.3 52.7-127.3S207.9 76 256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256c0 43.9-15.6 85.4-44.2 118.1z" fill="currentColor"/></svg>,
      count: "1,674,767",
      label: "Students",
      bgColor: "bg-pink-50",
      iconColor: "bg-pink-400",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7.5 13.5v-1h9v1zm0 4v-1h6v1zM4 21V5h3.385V2.77h1.077V5h7.154V2.77h1V5H20v16zm1-1h14v-9.384H5zM5 9.615h14V6H5zm0 0V6z"/></svg>,
      count: "3",
      label: "Online Courses",
      bgColor: "bg-green-50",
      iconColor: "bg-green-400",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 14 14"><path fill="currentColor" fill-rule="evenodd" d="M0 3a1.5 1.5 0 0 1 1.5-1.5h11A1.5 1.5 0 0 1 14 3v8a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 11zm9.5 6.5h-5L3.9 11h6.2zM2 5.75C2 4.784 2.784 4 3.75 4h6.5a1.75 1.75 0 1 1 0 3.5h-6.5A1.75 1.75 0 0 1 2 5.75M3.75 5a.75.75 0 0 0 0 1.5h.915a.998.998 0 0 0 0-1.5zm4.393 1.5H5.857a2 2 0 0 0 0-1.5h2.286a2 2 0 0 0 0 1.5m1.192 0h.915a.75.75 0 0 0 0-1.5h-.915a.998.998 0 0 0 0 1.5" clip-rule="evenodd"/></svg>,
      count: "$7,461,767",
      label: "USD Total Earning",
      bgColor: "bg-gray-50",
      iconColor: "bg-gray-400",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 14L1 8l11-6l11 6zm0 4L1.575 12.325l2.1-1.15L12 15.725l8.325-4.55l2.1 1.15zm0 4L1.575 16.325l2.1-1.15L12 19.725l8.325-4.55l2.1 1.15zm0-10.275L18.825 8L12 4.275L5.175 8zM12 8"/></svg>,
      count: "56,489",
      label: "Course Sold",
      bgColor: "bg-blue-50",
      iconColor: "bg-blue-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {stats.map((stat, index) => (
        <DashboardCard
          key={index}
          icon={stat.icon}
          count={stat.count}
          label={stat.label}
          bgColor={stat.bgColor}
          iconColor={stat.iconColor}
        />
      ))}
    </div>
  );
};

export default Card;
