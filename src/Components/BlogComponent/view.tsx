import styled from "styled-components";
import { BsArrowRight, BsChatDots, BsClock, BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";
import Blog1 from "../../assets/img/blog/blog-1.jpg";
import Blog2 from "../../assets/img/blog/blog-2.jpg";
import Blog3 from "../../assets/img/blog/blog-3.jpg";
import Blog4 from "../../assets/img/blog/blog-4.jpg";
import Blog5 from "../../assets/img/blog/blog-5.jpg";
import Blog6 from "../../assets/img/blog/blog-6.jpg";

const PostsWrapper = styled.div`
max-width: 872px;
display: flex;
justify-content: center;
flex-wrap: wrap;
margin: 48px 0 0;
padding: 0 12px;
gap: 15px;
`;
const Post = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
padding: 0 12px;
max-width: 416px;
width: 100%;
border-bottom: 1px solid #d6e2ef;
padding-bottom: 30px;
`;

const PostImg = styled.div`
overflow: hidden;
width: 100%;

img {
  width: 100%;
  max-height: 309px;
  max-width: 436px;
  height: auto;
  vertical-align: middle;
}
`;
const Title = styled.h2`
font-size: 20px;
font-weight: 600;
padding: 0;
margin: 20px 0 0 0;
a {
  text-decoration: none;
  color: var(--color-secondary);
  transition: 0.3s;
}
`;
const Meta = styled.div`
margin-top: 20px;
color: #467ab3;

ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  align-items: center;
  padding: 0;
  margin: 0;
  li {
    align-items: center;
  }
  li + li {
    padding-left: 20px;
  }
}
`;
const Person = styled(BsPerson)`
font-size: 16px;
margin-right: 8px;
line-height: 0;
color: rgba(86, 184, 230, 0.8);
`;

const Clock = styled(BsClock)`
font-size: 16px;
margin-right: 8px;
line-height: 0;
color: rgba(86, 184, 230, 0.8);
`;
const ChatsDots = styled(BsChatDots)`
font-size: 16px;
margin-right: 8px;
line-height: 0;
color: rgba(86, 184, 230, 0.8);
`;
const LinkMore = styled(Link)`
display: inline-block;
color: #1f98d1;
transition: 0.3s;
font-size: 15px;
font-weight: 500;
text-decoration: none;
`;
const ReadMore = styled.div`
margin-top: auto;
display: flex;
align-self: flex-end;
align-items: center;
`;
const BlogPagination = styled.div`
  margin-top: 30px;
  color: #38618e;

  ul {
    display: flex;
    justify-content: center !important;
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      margin: 0 5px;
      transition: 0.3s;

      a {
        text-decoration: none;
        color: #2aa5df;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        background: #dbf0fa;
        padding: 7px 16px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .active {
        background: var(--color-primary);
        color: #fff;
      }
    }
  }
`;

interface IBlog {
    img: string;
    header: string;
    name: string;
    date: string;
    comments: number;
    text: string;
  }

const ArrayBlog: IBlog[] = [
    {
      img: Blog1,
      header:
        "Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia",
      name: "John Doe",
      date: "Jan 1, 2022",
      comments: 12,
      text:
        "Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.",
    },
    {
      img: Blog2,
      header: "Nisi magni odit consequatur autem nulla dolorem",
      name: "John Doe",
      date: "Jan 1, 2022",
      comments: 12,
      text:
        "Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam.",
    },
    {
      img: Blog3,
      header:
        "Possimus soluta ut id suscipit ea ut. In quo quia et soluta libero sit sint.",
      name: "John Doe",
      date: "Jan 1, 2022",
      comments: 12,
      text:
        "Aut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis.",
    },
    {
      img: Blog4,
      header:
        "Non rem rerum nam cum quo minus. Dolor distinctio deleniti explicabo eius exercitationem.",
      name: "John Doe",
      date: "Jan 1, 2022",
      comments: 12,
      text:
        "Aspernatur rerum perferendis et sint. Voluptates cupiditate voluptas atque quae. Rem veritatis rerum enim et autem. Saepe atque cum eligendi eaque iste omnis a qui.",
    },
    {
      img: Blog5,
      header: "Accusamus quaerat aliquam qui debitis facilis consequatur",
      name: "John Doe",
      date: "Jan 1, 2022",
      comments: 12,
      text:
        "In itaque assumenda aliquam voluptatem qui temporibus iusto nisi quia. Autem vitae quas aperiam nesciunt mollitia tempora odio omnis. Ipsa odit sit ut amet necessitatibus. Quo ullam ut corrupti autem consequuntur totam dolorem.",
    },
    {
      img: Blog6,
      header: "Distinctio provident quibusdam numquam aperiam aut",
      name: "John Doe",
      date: "Jan 1, 2022",
      comments: 12,
      text:
        "Expedita et temporibus eligendi enim molestiae est architecto praesentium dolores. Illo laboriosam officiis quis. Labore officia quia sit voluptatem nisi est dignissimos totam. Et voluptate et consectetur voluptatem id dolor magni impedit. Omnis dolores sit.",
    },
  ];

const BlogComponent = () => {
  return (
    <>
            <PostsWrapper data-aos="fade-up" data-aos-duration="1000">
          {ArrayBlog.map((item, index) => {
            return (
              <Post key={index}>
                <PostImg>
                  <img src={item.img} alt="" />
                </PostImg>
                <Title>
                  <Link to="/blog-detals">{item.header}</Link>
                </Title>
                <Meta>
                  <ul>
                    <li>
                      <Person />
                      {item.name}
                    </li>
                    <li>
                      <Clock />
                      {item.date}
                    </li>
                    <li>
                      <ChatsDots />
                      {item.comments} Comments
                    </li>
                  </ul>
                </Meta>
                <div>
                  <p>{item.text}</p>
                </div>
                <ReadMore>
                  <LinkMore to="/blog-detals">
                    Read More <BsArrowRight />
                  </LinkMore>
                </ReadMore>
              </Post>
            );
          })}
          <BlogPagination data-aos="fade-up" data-aos-duration="1000">
            <ul>
              <li>
                <Link to="">1</Link>
              </li>
              <li>
                <Link to="" className="active">
                  2
                </Link>
              </li>
              <li>
                <Link to="">3</Link>
              </li>
            </ul>
          </BlogPagination>
        </PostsWrapper>
    </>
  )
}

export default BlogComponent