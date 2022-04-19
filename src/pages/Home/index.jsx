import React, { useState, useEffect } from "react";
import { Card } from "../../components";
import axios from "axios";
const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://api.publicapis.org/entries").then((response) => {
      setData(response.data.entries);
    });
  }, []);

  return data.map((entries, index) => (
    <Card
      key={index}
      title={entries.API}
      subtitle={entries.Description}
      type={entries.Category}
    />
  ));
};

export default Home;
