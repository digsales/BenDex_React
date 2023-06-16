import React, { useEffect, useState } from "react";

import PuffLoader from "react-spinners/PuffLoader";
import { useRouter } from "next/router";

const index = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      router.push("/transformacoes");
    }, 3000);
  }, []);
  return (
    <div
      style={{
        backgroundColor: "#1C1C1C",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      {loading ? (
        <PuffLoader color={"#17583B"} loading={loading} size={300} />
      ) : (
        <></>
      )}
      {loading && (
        <img
          src="https://i.pinimg.com/originals/59/41/73/594173036931a34e7952732d76b000c3.png"
          alt="Loading"
          style={{ width: 100, height: 100, position: "absolute" }}
        />
      )}
    </div>
  );
};

export default index;
