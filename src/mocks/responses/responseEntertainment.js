import Bioskop from "../../assets/images/cinema.png";
import Event from "../../assets/images/icon-event.png";
import PhotoStudio from "../../assets/images/foto-studio.png";
import TempatWisata from "../../assets/images/tempat-wisata.png";

const responseMenus = {
  data: [
    {
      id: 1,
      title: "Event",
      icon: Event,
    },
    {
      id: 2,
      title: "PhotoStudio",
      icon: PhotoStudio,
    },
    {
      id: 3,
      title: "TempatWisata",
      icon: TempatWisata,
    },
    {
      id: 4,
      title: "Bioskop",
      icon: Bioskop,
    }
  ],
  message: "Selamat menu berhasil.",
  status: "Success",
};

export default responseMenus;
