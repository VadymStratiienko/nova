import {
  BsChatDots,
  BsClock,
  BsFacebook,
  BsFolder,
  BsInstagram,
  BsPerson,
  BsReplyFill,
  BsTags,
  BsTwitter,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Blog from "../../assets/img/blog/blog-1.jpg";
import BlogInsidePost from "../../assets/img/blog/blog-inside-post.jpg";
import BlogAuthot from "../../assets/img/blog/blog-author.jpg";
import Comments1 from "../../assets/img/blog/comments-1.jpg";
import Comments2 from "../../assets/img/blog/comments-2.jpg";
import Comments3 from "../../assets/img/blog/comments-3.jpg";
import Comments4 from "../../assets/img/blog/comments-4.jpg";
import Comments5 from "../../assets/img/blog/comments-5.jpg";
import Comments6 from "../../assets/img/blog/comments-6.jpg";

const Container = styled.div`
  margin-top: 48px;
  padding: 0 24px;
  max-width: 848px;
  min-width: 350px;
  display: flex;
  flex-direction: column;
`;
const Post = styled.article`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  box-shadow: 0 4px 16px rgb(0 0 0 / 10%);
  padding: 30px;

  h2 {
    font-size: 28px;
    font-weight: 700;
    padding: 0;
    margin: 20px 0 0 0;
    color: var(--color-secondary);
  }
  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;
const PostImg = styled.div`
  margin: -30px -30px 20px -30px;
  overflow: hidden;
  max-width: 848px;
  
  img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
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

const Content = styled.div`
  margin-top: 20px;
  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  blockquote {
    overflow: hidden;
    background-color: rgba(27, 47, 69, 0.06);
    padding: 60px;
    position: relative;
    text-align: center;
    margin: 20px 0;
    ::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 3px;
      background-color: var(--color-secondary);
      margin-top: 20px;
      margin-bottom: 20px;
    }
    p {
      color: var(--color-default);
      line-height: 1.6;
      margin-bottom: 0;
      font-style: italic;
      font-weight: 500;
      font-size: 22px;
    }
  }
  h3 {
    font-size: 22px;
    margin: 30px 0 8px;
    font-weight: bold;
  }
  img {
    max-width: 100%;
    height: auto;
  }
`;
const MetaBottom = styled.div`
  padding-top: 10px;
  border-top: 1px solid rgba(27, 47, 69, 0.15);
`;
const Folder = styled(BsFolder)`
  color: #38618e;
  display: inline;
`;
const Cats = styled.ul`
  display: inline;
  list-style: none;
  padding: 0 20px 0 0;
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 1rem;

  li {
    display: inline-block;
  }

  a {
    text-decoration: none;
    color: rgba(27, 47, 69, 0.8);
    transition: 0.3s;
  }
`;
const Tag = styled(BsTags)`
  color: #38618e;
  display: inline;
`;
const Tags = styled.ul`
  list-style: none;
  display: inline;
  padding: 0;
  font-size: 14px;

  li {
    display: inline-block;
  }
  a {
    text-decoration: none;
    color: rgba(27, 47, 69, 0.8);
    transition: 0.3s;
  }
`;
const PostAuthor = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  margin-top: 30px;
  box-shadow: 0 4px 16px rgb(0 0 0 / 10%);

  img {
    max-width: 120px;
    margin-right: 20px;
    border-radius: 50% !important;
    flex-shrink: 0 !important;
    vertical-align: middle;
  }
  h4 {
    font-weight: 600;
    font-size: 22px;
    margin-bottom: 0px;
    padding: 0;
    color: var(--color-secondary);
  }
  p {
    font-style: italic;
    color: rgba(var(--color-gray-rgb), 0.8);
    margin-bottom: 0;
  }
`;
const SocialLinks = styled.div`
  margin: 0 10px 10px 0;

  a {
    color: rgba(27, 47, 69, 0.5);
    margin-right: 5px;
    text-decoration: none;
    transition: 0.3s;
  }
`;
const Comments = styled.div`
  margin-top: 30px;
  h4 {
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-family: var(--font-primary);
    line-height: 1.2;
    @media (min-width: 1200px) {
      font-size: 1.5rem;
    }
  }
`;
const Comment = styled.div`
  margin-top: 30px;
  position: relative;

  h5 {
    font-size: 16px;
    margin-bottom: 2px;

    a {
      text-decoration: none;
      font-weight: bold;
      color: var(--color-secondary);
      transition: 0.3s;
    }
    a + a {
      padding-left: 10px;
    }
  }
  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  time {
    display: block;
    font-size: 14px;
    color: rgba(27, 47, 69, 0.8);
    margin-bottom: 5px;
  }
`;
const CommentImg = styled.div`
  margin-right: 14px;

  img {
    width: 60px;
    vertical-align: middle;
  }
`;
const ReplyFill = styled(BsReplyFill)`
  font-size: 20px;
`;
const CommentReply = styled.div`
  padding-left: 40px;
  margin-top: 30px;
  position: relative;
  display: flex;
  flex-direction: column;

  time {
    display: block;
    font-size: 14px;
    color: rgba(27, 47, 69, 0.8);
    margin-bottom: 5px;
  }
`;
const Block = styled.div`
  display: flex;
  flex-direction: row;
`;
const ReplyForm = styled.div`
  margin-top: 30px;
  padding: 30px;
  box-shadow: 0 4px 16px rgb(0 0 0 / 10%);

  h4 {
    font-weight: bold;
    font-size: 22px;
    font-family: var(--font-primary);
    margin-top: 0;
    margin-bottom: 0.5rem;
    line-height: 1.2;
  }
  p {
    font-size: 14px;
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;
const FormBox = styled.div`
  display: flex;
`;
const FormGroup = styled.div`
  margin-bottom: 25px;
  padding: 0 12px;
  @media (min-width: 768px) {
    flex: 0 0 auto;
    width: 50%;
  }
  input {
    border-radius: 4px;
    padding: 10px 10px;
    font-size: 14px;
    display: block;
    width: 100%;

    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    appearance: none;
    border-radius: 0.375rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
`;
const FormGroupW = styled.div`
  margin-bottom: 25px;
  padding: 0 12px;
  flex: 1 0 0%;
  input {
    border-radius: 4px;
    padding: 10px 10px;
    font-size: 14px;
    display: block;
    width: 100%;

    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    appearance: none;
    border-radius: 0.375rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
`;
const FormArea = styled.div`
  padding: 0 12px;
  margin-bottom: 25px;
  flex: 1 0 0%;

  textarea {
    resize: none;
    border-radius: 4px;
    padding: 10px 10px;
    font-size: 14px;
    min-height: calc(1.5em em + 0.75rem + 2px);
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.375rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
`;
const Button = styled.button`
  cursor: pointer;
  border-radius: 4px px;
  padding: 10px 20px;
  border: 0;
  background-color: var(--color-secondary);
  color: white;
`;

const PostDetails = () => {
  return (
    <Container>
      <Post>
        <PostImg>
          <img src={Blog} alt="" />
        </PostImg>
        <h2>
          Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam
          quia
        </h2>
        <Meta>
          <ul>
            <li>
              <Person />
              John Doe
            </li>
            <li>
              <Clock />
              Jan 1, 2022
            </li>
            <li>
              <ChatsDots />
              12 Comments
            </li>
          </ul>
        </Meta>
        <Content>
          <p>
            Similique neque nam consequuntur ad non maxime aliquam quas.
            Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum
            quidem aliquid dicta. Et eveniet enim. Qui velit est ea dolorem
            doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut
            et sit sunt. Voluptate porro consequatur assumenda perferendis
            dolore.
          </p>
          <p>
            Sit repellat hic cupiditate hic ut nemo. Quis nihil sunt non
            reiciendis. Sequi in accusamus harum vel aspernatur. Excepturi
            numquam nihil cumque odio. Et voluptate cupiditate.
          </p>
          <blockquote>
            <p>
              Et vero doloremque tempore voluptatem ratione vel aut. Deleniti
              sunt animi aut. Aut eos aliquam doloribus minus autem quos.
            </p>
          </blockquote>
          <p>
            Sed quo laboriosam qui architecto. Occaecati repellendus omnis dicta
            inventore tempore provident voluptas mollitia aliquid. Id
            repellendus quia. Asperiores nihil magni dicta est suscipit
            perspiciatis. Voluptate ex rerum assumenda dolores nihil quaerat.
            Dolor porro tempora et quibusdam voluptas. Beatae aut at ad qui
            tempore corrupti velit quisquam rerum. Omnis dolorum exercitationem
            harum qui qui blanditiis neque. Iusto autem itaque. Repudiandae hic
            quae aspernatur ea neque qui. Architecto voluptatem magni. Vel
            magnam quod et tempora deleniti error rerum nihil tempora.
          </p>
          <h3>Et quae iure vel ut odit alias.</h3>
          <p>
            Officiis animi maxime nulla quo et harum eum quis a. Sit hic in qui
            quos fugit ut rerum atque. Optio provident dolores atque voluptatem
            rem excepturi molestiae qui. Voluptatem laborum omnis ullam
            quibusdam perspiciatis nulla nostrum. Voluptatum est libero eum
            nesciunt aliquid qui. Quia et suscipit non sequi. Maxime sed odit.
            Beatae nesciunt nesciunt accusamus quia aut ratione aspernatur
            dolor. Sint harum eveniet dicta exercitationem minima.
            Exercitationem omnis asperiores natus aperiam dolor consequatur id
            ex sed. Quibusdam rerum dolores sint consequatur quidem ea. Beatae
            minima sunt libero soluta sapiente in rem assumenda. Et qui odit
            voluptatem. Cum quibusdam voluptatem voluptatem accusamus mollitia
            aut atque aut.
          </p>
          <img src={BlogInsidePost} alt="" />
          <h3>Ut repellat blanditiis est dolore sunt dolorum quae.</h3>
          <p>
            Rerum ea est assumenda pariatur quasi et quam. Facilis nam porro
            amet nostrum. In assumenda quia quae a id praesentium. Quos deleniti
            libero sed occaecati aut porro autem. Consectetur sed excepturi sint
            non placeat quia repellat incidunt labore. Autem facilis hic dolorum
            dolores vel. Consectetur quasi id et optio praesentium aut
            asperiores eaque aut. Explicabo omnis quibusdam esse. Ex libero
            illum iusto totam et ut aut blanditiis. Veritatis numquam ut illum
            ut a quam vitae.
          </p>
          <p>
            Alias quia non aliquid. Eos et ea velit. Voluptatem maxime enim
            omnis ipsa voluptas incidunt. Nulla sit eaque mollitia nisi
            asperiores est veniam.
          </p>
        </Content>
        <MetaBottom>
          <Folder />
           
          <Cats>
            <li>
              <Link to="">Business</Link>
            </li>
          </Cats>
          <Tag />
           
          <Tags>
            <li>
              <Link to="">Creative</Link>,  
            </li>
            <li>
              <Link to="">Tips</Link>,  
            </li>
            <li>
              <Link to="">Marketing</Link>,  
            </li>
          </Tags>
        </MetaBottom>
      </Post>
      <PostAuthor>
        <img src={BlogAuthot} alt="" />
        <div>
          <h4>Jane Smith</h4>
          <SocialLinks>
            <Link to="https://twitter.com/">
              <BsTwitter />
            </Link>
            <Link to="https://www.facebook.com/">
              <BsFacebook />
            </Link>
            <Link to="https://www.instagram.com/">
              <BsInstagram />
            </Link>
          </SocialLinks>
          <p>
            Itaque quidem optio quia voluptatibus dolorem dolor. Modi eum sed
            possimus accusantium. Quas repellat voluptatem officia numquam sint
            aspernatur voluptas. Esse et accusantium ut unde voluptas.
          </p>
        </div>
      </PostAuthor>
      <Comments>
        <h4>8 Comments</h4>
        <Comment>
          <Block>
            <CommentImg>
              <img src={Comments1} alt="" />
            </CommentImg>
            <div>
              <h5>
                <Link to="">Geargia Reader</Link>
                <Link to="">
                  <ReplyFill />
                    Reply
                </Link>
              </h5>
              <time>01 Jan, 2022</time>
              <p>
                Et rerum totam nisi. Molestiae vel quam dolorum vel voluptatem
                et et. Est ad aut sapiente quis molestiae est qui cum soluta.
                Vero aut rerum vel. Rerum quos laboriosam placeat ex qui. Sint
                qui facilis et.
              </p>
            </div>
          </Block>
        </Comment>
        <Comment>
          <Block>
            <CommentImg>
              <img src={Comments2} alt="" />
            </CommentImg>
            <div>
              <h5>
                <Link to="">AronAlvarado</Link>
                <Link to="">
                  <ReplyFill />
                    Reply
                </Link>
              </h5>
              <time>01 Jan, 2022</time>
              <p>
                Ipsam tempora sequi voluptatem quis sapiente non. Autem itaque
                eveniet saepe. Officiis illo ut beatae.
              </p>
            </div>
          </Block>
          <CommentReply>
            <Block>
              <CommentImg>
                <img src={Comments3} alt="" />
              </CommentImg>
              <div>
                <h5>
                  <Link to="">Lynda Small</Link>
                  <Link to="">
                    <ReplyFill />
                      Reply
                  </Link>
                </h5>
                <time>01 Jan, 2022</time>
                <p>
                  Enim ipsa eum fugiat fuga repellat. Commodi quo quo dicta. Est
                  ullam aspernatur ut vitae quia mollitia id non. Qui ad quas
                  nostrum rerum sed necessitatibus aut est. Eum officiis sed
                  repellat maxime vero nisi natus. Amet nesciunt nesciunt qui
                  illum omnis est et dolor recusandae. Recusandae sit ad aut
                  impedit et. Ipsa labore dolor impedit et natus in porro aut.
                  Magnam qui cum. Illo similique occaecati nihil modi eligendi.
                  Pariatur distinctio labore omnis incidunt et illum. Expedita
                  et dignissimos distinctio laborum minima fugiat. Libero
                  corporis qui. Nam illo odio beatae enim ducimus. Harum
                  reiciendis error dolorum non autem quisquam vero rerum neque.
                </p>
              </div>
            </Block>
            <CommentReply>
              <Block>
                <CommentImg>
                  <img src={Comments4} alt="" />
                </CommentImg>
                <div>
                  <h5>
                    <Link to="">Sianna Ramsay</Link>
                    <Link to="">
                      <ReplyFill />
                        Reply
                    </Link>
                  </h5>
                  <time>01 Jan, 2022</time>
                  <p>
                    Et dignissimos impedit nulla et quo distinctio ex nemo.
                    Omnis quia dolores cupiditate et. Ut unde qui eligendi
                    sapiente omnis ullam. Placeat porro est commodi est officiis
                    voluptas repellat quisquam possimus. Perferendis id
                    consectetur necessitatibus.
                  </p>
                </div>
              </Block>
            </CommentReply>
          </CommentReply>
        </Comment>
        <Comment>
          <Block>
            <CommentImg>
              <img src={Comments5} alt="" />
            </CommentImg>
            <div>
              <h5>
                <Link to="">Nolan Davidson</Link>
                <Link to="">
                  <ReplyFill />
                    Reply
                </Link>
              </h5>
              <time>01 Jan, 2022</time>
              <p>
                Distinctio nesciunt rerum reprehenderit sed. Iste omnis eius
                repellendus quia nihil ut accusantium tempore. Nesciunt expedita
                id dolor exercitationem aspernatur aut quam ut. Voluptatem est
                accusamus iste at. Non aut et et esse qui sit modi neque.
                Exercitationem et eos aspernatur. Ea est consequuntur officia
                beatae ea aut eos soluta. Non qui dolorum voluptatibus et optio
                veniam. Quam officia sit nostrum dolorem.
              </p>
            </div>
          </Block>
        </Comment>
        <Comment>
          <Block>
            <CommentImg>
              <img src={Comments6} alt="" />
            </CommentImg>
            <div>
              <h5>
                <Link to="">Kay Duggan</Link>
                <Link to="">
                  <ReplyFill />
                    Reply
                </Link>
              </h5>
              <time>01 Jan, 2022</time>
              <p>
                Dolorem atque aut. Omnis doloremque blanditiis quia eum porro
                quis ut velit tempore. Cumque sed quia ut maxime. Est ad aut
                cum. Ut exercitationem non in fugiat.
              </p>
            </div>
          </Block>
        </Comment>
      </Comments>
      <ReplyForm>
        <h4>Leave a Reply</h4>
        <p>
          Your email address will not be published. Required fields are marked *
        </p>
        <form action="">
          <FormBox>
            <FormGroup>
              <input type="text" placeholder="Your Name*" />
            </FormGroup>
            <FormGroup>
              <input type="text" placeholder="Your Email*" />
            </FormGroup>
          </FormBox>
          <FormBox>
            <FormGroupW>
              <input type="text" placeholder="Your Website" />
            </FormGroupW>
          </FormBox>
          <FormArea>
            <textarea name="comment" placeholder="Your Comment*"></textarea>
          </FormArea>
          <Button type="submit">Post Comment</Button>
        </form>
      </ReplyForm>
    </Container>
  );
};

export default PostDetails;
