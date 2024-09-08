import "./portfolio.scss";

const items = [
  {
    id: 1,
    title: "Game Hub Version 1",
    img: "https://images.pexels.com/photos/25568845/pexels-photo-25568845/free-photo-of-couple-standing-and-reading-album.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, repellendus, inventore dolores asperiores distinctio nesciunt obcaecati deserunt dolorum voluptatum quasi molestiae nulla esse saepe voluptatibus fuga exercitationem. Exercitationem, dolor ad.",
  },
  {
    id: 2,
    title: "Game Hub Version 2",
    img: "https://images.pexels.com/photos/3855560/pexels-photo-3855560.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, repellendus, inventore dolores asperiores distinctio nesciunt obcaecati deserunt dolorum voluptatum quasi molestiae nulla esse saepe voluptatibus fuga exercitationem. Exercitationem, dolor ad.",
  },
  {
    id: 3,
    title: "Evo Gym",
    img: "https://images.pexels.com/photos/28197211/pexels-photo-28197211/free-photo-of-a-person-riding-a-horse-on-a-dirt-road.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, repellendus, inventore dolores asperiores distinctio nesciunt obcaecati deserunt dolorum voluptatum quasi molestiae nulla esse saepe voluptatibus fuga exercitationem. Exercitationem, dolor ad.",
  },
  {
    id: 4,
    title: "React 18: Intermediate Topics",
    img: "https://images.pexels.com/photos/27962064/pexels-photo-27962064/free-photo-of-a-person-standing-on-a-mountain-with-a-lake-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, repellendus, inventore dolores asperiores distinctio nesciunt obcaecati deserunt dolorum voluptatum quasi molestiae nulla esse saepe voluptatibus fuga exercitationem. Exercitationem, dolor ad.",
  },
];

const Single = ({item}) => {
    return(
        <section>{item.title}</section>
    )
}
const Portfolio = () => {
  return <div className="portfolio">
    {items.map(item => (
        <Single key={item.id} item={item} />
    ))}
  </div>;
};

export default Portfolio;
