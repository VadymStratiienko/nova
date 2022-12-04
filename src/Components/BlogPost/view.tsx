import { BsArrowRight } from "react-icons/bs";
import styled from "styled-components";
import Blog1 from "../../assets/img/blog/blog-1.jpg";
import Blog2 from "../../assets/img/blog/blog-2.jpg";
import Blog3 from "../../assets/img/blog/blog-3.jpg";
import Blog4 from "../../assets/img/blog/blog-4.jpg";

const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  overflow: hidden;
  padding: 80px 0;

`;
const SectionHeader = styled.div`
  text-align: center;
  padding-bottom: 30px;

  h2 {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 20px;
    padding-bottom: 20px;
    position: relative;
    ::after {
      content: "";
      position: absolute;
      display: block;
      width: 60px;
      height: 2px;
      background: var(--color-primary);
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
    }
  }
`;
const Posts = styled.div`
  display: flex;
  flex-wrap: wrap;
flex-direction: row;
justify-content: center;
  column-gap: 35px;
  --bs-gutter-y: 3rem;
`;

const Post = styled.div`
  margin: 48px 0 0;
  padding: 0 12px;
  flex: 0 0 auto;
  max-width: 306px;

  :hover {
    transform: scale(1.1);
    transition: 0.3s all ease;
  }
`;

const PostBox = styled.div`
  transition: 0.3s;
  height: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;

  a {
    display: flex;

    color: var(--color-primary);
    text-decoration: none;
    transition: 0.3s;
    text-decoration: none;

    span {
      display: flex;
      align-items: center;
      font-weight: 600;
      line-height: 1;
      transition: 0.3s;
      margin-top: 15px;
    }
  }
`;
const PostImg = styled.div`
  overflow: hidden;
  position: relative;

  img {
    transition: 0.5s;
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    max-width: 306px;
  }
`;
const Date = styled.span`
  font-size: 15px;
  font-weight: 400;
  color: var(--color-primary);
`;
const Name = styled.span`
  font-size: 15px;
  font-weight: 400;
  color: var(--color-secondary);
`;

const DateName = styled.div`
  margin-top: 15px;
`;
const PostTitle = styled.h3`
  font-size: 18px;
  color: var(--color-secondary);
  font-weight: 700;
  margin: 15px 0 0 0;
  position: relative;
  transition: 0.3s;
`;
const Text = styled.p`
  margin: 15px 0 0 0;
  color: rgba(27, 47, 69, 0.7);
`;

function BlogPost() {
  return (
    <section>
    <Container  data-aos="fade-up"   data-aos-duration="1000">
      <SectionHeader>
        <h2>Recent Blog Posts</h2>
      </SectionHeader>
      <Posts>
        <Post  data-aos="fade-up"   data-aos-duration="1000">
          <PostBox>
            <PostImg>
              <img src={Blog1} alt="" />
            </PostImg>
            <DateName>
              <Date>Tue, December 12</Date>
              <Name> / Julia Parker</Name>
            </DateName>
            <PostTitle>Eum ad dolor et. Autem aut fugiat debitis</PostTitle>
            <Text>
              Illum voluptas ab enim placeat. Adipisci enim velit nulla. Vel
              omnis laudantium. Asperiores eum ipsa est officiis. Modi qui magni
              est...
            </Text>
            <a href="/">
              <span>
                Read More  
                <BsArrowRight />
              </span>
            </a>
          </PostBox>
        </Post>

        <Post  data-aos="fade-up"   data-aos-duration="1000">
          <PostBox>
            <PostImg>
              <img src={Blog2} alt="" />
            </PostImg>
            <DateName>
              <Date>Fri, September 05</Date>
              <Name> / Mario Douglas</Name>
            </DateName>
            <PostTitle>Et repellendus molestiae qui est sed omnis</PostTitle>
            <Text>
              Voluptatem nesciunt omnis libero autem tempora enim ut ipsam id.
              Odit quia ab eum assumenda. Quisquam omnis doloribus...
            </Text>
            <a href="blog-details.html">
              <span>
                Read More  
                <BsArrowRight />
              </span>
            </a>
          </PostBox>
        </Post>

        <Post  data-aos="fade-up"   data-aos-duration="1000">
          <PostBox>
            <PostImg>
              <img src={Blog3} alt="" />
            </PostImg>
            <DateName>
              <Date>Tue, July 27</Date>
              <Name> / Lisa Hunter</Name>
            </DateName>
            <PostTitle>Quia assumenda est et veritati</PostTitle>
            <Text>
              Quia nam eaque omnis explicabo similique eum quaerat similique
              laboriosam. Quis omnis repellat sed quae consectetur magnam...
            </Text>
            <a href="blog-details.html">
              <span>
                Read More  
                <BsArrowRight />
              </span>
            </a>
          </PostBox>
        </Post>

        <Post  data-aos="fade-up"   data-aos-duration="1000">
          <PostBox>
            <PostImg>
              <img src={Blog4} alt="" />
            </PostImg>
            <DateName>
              <Date>Tue, Sep 16</Date>
              <Name> / Mario Douglas</Name>
            </DateName>
            <PostTitle>Pariatur quia facilis similique deleniti</PostTitle>
            <Text>
              Et consequatur eveniet nam voluptas commodi cumque ea est ex. Aut
              quis omnis sint ipsum earum quia eligendi...
            </Text>
            <a href="blog-details.html">
              <span>
                Read More  
                <BsArrowRight />
              </span>
            </a>
          </PostBox>
        </Post>
      </Posts>
    </Container>
    </section>
  );
}

export default BlogPost;
