import Bengkel from "../../assets/images/bengkel.png";
import Bioskop from "../../assets/images/bioskop.png";
import Finance from "../../assets/images/finance.png";
import Kesehatan from "../../assets/images/kesehatan.png";
import Pemerintahan from "../../assets/images/pemerintah.png";
import Salon from "../../assets/images/salon.png";

const responseMenus = {
  data: [
    {
      id: 1,
      title: "Kesehatan",
      icon: Kesehatan,
    },
    {
      id: 2,
      title: "Pemerintah",
      icon: Pemerintahan,
    },
    {
      id: 3,
      title: "Keuangan",
      icon: Finance,
    },
    {
      id: 4,
      title: "Kecantikan",
      icon: Salon,
    },
    {
      id: 5,
      title: "Service",
      icon: Bengkel,
    },
    {
      id: 6,
      title: "Hiburan",
      icon: Bioskop,
    },
  ],
  message: "Selamat menu berhasil.",
  status: "Success",
};

export default responseMenus;
