import { BsArrowRight, BsChatDots, BsClock, BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";
import Blog1 from "../../assets/img/blog/blog-1.jpg";
import Blog2 from "../../assets/img/blog/blog-2.jpg";
import Blog3 from "../../assets/img/blog/blog-3.jpg";
import Blog4 from "../../assets/img/blog/blog-4.jpg";
import Blog5 from "../../assets/img/blog/blog-5.jpg";
import Blog6 from "../../assets/img/blog/blog-6.jpg";
import Recent1 from "../../assets/img/blog/blog-recent-1.jpg";
import Recent2 from "../../assets/img/blog/blog-recent-1.jpg";
import Recent3 from "../../assets/img/blog/blog-recent-1.jpg";
import Recent4 from "../../assets/img/blog/blog-recent-1.jpg";
import Recent5 from "../../assets/img/blog/blog-recent-1.jpg";

const Container = styled.div`
  margin: 0 auto;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  padding: 80px 0;
  display: flex;
  max-width: 1344px;
  @media (max-width:1350px) {
    flex-wrap: wrap;
  }
`;
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
const Bar = styled.div`
  margin-top: 48px;
  padding: 0 24px;
  padding-left: 1.5rem;
`;
const RecentPostsWrapper = styled.div`
  margin-top: 40px;

  h3 {
    font-size: 22px;
    font-weight: 400;
    padding: 0;
    margin: 0;
    color: var(--color-secondary);
  }
`;
const RecentPost = styled.div`
  margin-top: 1rem;
  display: flex;
  box-shadow: 0px 0 15px rgb(0 0 0 / 8%);
  padding: 20px;

  img {
    width: 80px;
    margin-right: 15px;
  }
  div h4 {
    font-size: 18px;
    font-weight: 400;
  }
  div h4 a {
    text-decoration: none;
    color: var(--color-secondary);
    transition: 0.3s;
  }
`;
const SearchForm = styled.div`
  h3 {
    font-size: 22px;
    font-weight: 400;
    padding: 0;
    margin: 0;
    color: var(--color-secondary);
  }

  form {
    margin-top: 1rem;
    background: #fff;
    border: 1px solid rgba(27, 47, 69, 0.2);
    padding: 3px 10px;
    position: relative;

    input[type="text"] {
      border: 0;
      padding: 4px;
      border-radius: 4px;
      width: calc(100% - 40px);
      margin: 0;
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }
    button {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      border: 0;
      background: none;
      font-size: 16px;
      padding: 0 15px;
      margin: -1px;
      background: var(--color-primary);
      color: #fff;
      transition: 0.3s;
      border-radius: 0 4px 4px 0;
      line-height: 0;
    }
  }
`;
const Categories = styled.div`
  margin-top: 40px;

  h3 {
    font-size: 22px;
    font-weight: 400;
    padding: 0;
    margin: 0;
    color: var(--color-secondary);
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul li {
    padding-top: 10px;

    a {
      text-decoration: none;
      color: var(--color-secondary);
      font-size: 15px;
    }
  }
  ul a span {
    padding-left: 5px;
    color: rgba(var(--color-default-rgb), 0.4);
    font-size: 14px;
  }
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
const Tags = styled.div`
  margin-top: 40px;

  h3 {
    font-size: 22px;
    font-weight: 400;
    padding: 0;
    margin: 0;
    color: var(--color-secondary);
  }
  ul {
    margin: 1rem 0;
    list-style: none;
    padding: 0;

    li {
      display: inline-block;
    }

    a {
      text-decoration: none;
      color: #38618e;
      font-size: 14px;
      padding: 6px 14px;
      margin: 0 6px 8px 0;
      border: 1px solid rgba(27, 47, 69, 0.15);
      display: inline-block;
      border-radius: 50px;
      transition: 0.3s;
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
interface IRecent {
  img: string;
  header: string;
  time: string;
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
const ArrayRecent: IRecent[] = [
  {
    img: Recent1,
    header: "Nihil blanditiis at in nihil autem",
    time: "Jan 1, 2020",
  },
  {
    img: Recent2,
    header: "Quidem autem et impedit",
    time: "Jan 1, 2020",
  },
  {
    img: Recent3,
    header: "Id quia et et ut maxime similique occaecati ut",
    time: "Jan 1, 2020",
  },
  {
    img: Recent4,
    header: "Laborum corporis quo dara net para",
    time: "Jan 1, 2020",
  },
  {
    img: Recent5,
    header: "Et dolores corrupti quae illo quod dolor",
    time: "Jan 1, 2020",
  },
];

const LandingBlog = () => {
  return (
    <section>
      <Container>
        <PostsWrapper>
          {ArrayBlog.map((item, index) => {
            return (
              <Post key={index}>
                <PostImg>
                  <img src={item.img} alt="" />
                </PostImg>
                <Title>
                  <Link to="blog-detals">{item.header}</Link>
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
                  <LinkMore to="blog-detals">
                    Read More <BsArrowRight />
                  </LinkMore>
                </ReadMore>
              </Post>
            );
          })}
          <BlogPagination>
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
        <Bar>
          <SearchForm>
            <h3>Search</h3>
            <form action="">
              <input type="text" />
              <button type="submit">
                <BsSearch />
              </button>
            </form>
          </SearchForm>
          <Categories>
            <h3>Categories</h3>
            <ul>
              <li>
                <Link to="">
                  General<span>(25)</span>
                </Link>
              </li>
              <li>
                <Link to="">
                  Lifestyle<span>(12)</span>
                </Link>
              </li>
              <li>
                <Link to="">
                  Travel<span>(5)</span>
                </Link>
              </li>
              <li>
                <Link to="">
                  Design<span>(22)</span>
                </Link>
              </li>
              <li>
                <Link to="">
                  Creative<span>(8)</span>
                </Link>
              </li>
              <li>
                <Link to="">
                  Eduaction<span>(14)</span>
                </Link>
              </li>
            </ul>
          </Categories>
          <RecentPostsWrapper>
            <h3>Recent Posts</h3>
            {ArrayRecent.map((item, index) => {
              return (
                <RecentPost key={index}>
                  <img src={item.img} alt="" />
                  <div>
                    <h4>
                      <Link to="">{item.header}</Link>
                    </h4>
                    <time>{item.time}</time>
                  </div>
                </RecentPost>
              );
            })}
          </RecentPostsWrapper>
          <Tags>
            <h3>Tags</h3>
            <ul>
              <li>
                <Link to="">App</Link>
              </li>
              <li>
                <Link to="">IT</Link>
              </li>
              <li>
                <Link to="">Business</Link>
              </li>
              <li>
                <Link to="">Mac</Link>
              </li>
              <li>
                <Link to="">Design</Link>
              </li>
              <li>
                <Link to="">Office</Link>
              </li>
              <li>
                <Link to="">Creative</Link>
              </li>
              <li>
                <Link to="">Studio</Link>
              </li>
              <li>
                <Link to="">Smart</Link>
              </li>
              <li>
                <Link to="">Tips</Link>
              </li>
              <li>
                <Link to="">Marketing</Link>
              </li>
            </ul>
          </Tags>
        </Bar>
      </Container>
    </section>
  );
};

export default LandingBlog;
