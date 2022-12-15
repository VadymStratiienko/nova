import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";
import Recent1 from "../../assets/img/blog/blog-recent-1.jpg";
import Recent2 from "../../assets/img/blog/blog-recent-1.jpg";
import Recent3 from "../../assets/img/blog/blog-recent-1.jpg";
import Recent4 from "../../assets/img/blog/blog-recent-1.jpg";
import Recent5 from "../../assets/img/blog/blog-recent-1.jpg";

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

interface IRecent {
  img: string;
  header: string;
  time: string;
}

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

const BarComponent = () => {
  return (
    <>
      {" "}
      <Bar data-aos="fade-up" data-aos-duration="1000">
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
        <RecentPostsWrapper data-aos="fade-up" data-aos-duration="1000">
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
        <Tags data-aos="fade-up" data-aos-duration="1000">
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
    </>
  );
};

export default BarComponent;
