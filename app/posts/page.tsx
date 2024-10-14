import CardList from "../components/Posts/CardList";
import ViewUserButton from "../components/Posts/ViewUserButton";
import { useState, useEffect } from 'react';

const Posts = () => {
  const [barangList, setBarangList] = useState([]);

  useEffect(() => {
    const fetchBarang = async () => {
      const res = await fetch('/data/Daftar Barang.json');
      const data = await res.json();
      setBarangList(data['Daftar Barang']);
    };

    fetchBarang();
  }, []);

  return (
    <div>
      <h1 className="text-fuchsia-500">POSTINGAN PAGE</h1>
      {barangList.map((barang, index) => (
        <div key={index}>
          <p>{barang.Barang}</p>
          <p>{barang.Tanggal}</p>
          <p>{barang.Pemilik}</p>
          <p>{barang.Alamat}</p>
          <p>{barang.NoTelp}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;