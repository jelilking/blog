import React from "react";
import PostAuthor from "../Components/PostAuthor";
import { Link } from "react-router-dom";
import Thumbnail from "../images/Thumbnail4.jpg";

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post__detail-container">
        <div className="post__detail-header">
          <PostAuthor />
          <div className="post__detail-buttons">
            <Link to={`/posts/werwer/edit`} className="btn sm primary">
              Edit
            </Link>
            <Link to={`/posts/werwer/delete`} className="btn sm danger">
              delete
            </Link>
          </div>
        </div>
        <h1>This is the post title!</h1>
        <div className="post__detail-thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quo
          sed autem nobis ducimus et eligendi totam facilis minima excepturi,
          incidunt a odit doloribus cum non ipsam quam? Quam fuga pariatur dolor
          laborum quae dolores ipsum ad amet sint vero!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias,
          magnam odit expedita eos commodi consectetur quod consequuntur fugiat
          velit quisquam illo quo ut vel, reprehenderit ullam cum minus rerum
          officiis modi? Dicta tenetur rem corporis consectetur suscipit
          recusandae saepe laborum odio ab, ducimus et sed atque quaerat
          assumenda eveniet quasi tempore natus blanditiis accusantium.
          Pariatur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          fuga velit aliquam, ex molestias quis animi corrupti dolore, nesciunt
          ipsum, fugiat facere a beatae incidunt amet veniam minus. Quasi
          doloribus deleniti quo odio, vitae quisquam totam possimus nemo beatae
          numquam accusamus consequuntur aliquam voluptate impedit unde enim
          quas esse sed amet sapiente pariatur eos culpa? Incidunt quibusdam
          dolorum sapiente, accusamus iure, amet voluptatibus assumenda illo
          est, laudantium dolorem quam! Ipsum architecto eius nam? Aspernatur
          provident omnis consequuntur excepturi quaerat, optio animi aliquid
          sit unde! Facere, commodi labore. Tempore accusamus repellat
          asperiores ratione minima laboriosam qui a et aliquid provident iste
          deserunt, sequi, ullam eveniet debitis commodi. Itaque soluta
          molestiae maiores temporibus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          ullam culpa maiores nemo, temporibus exercitationem dolorem officiis
          necessitatibus laudantium magnam dolorum consequuntur quas dolores
          alias, nam eum. Distinctio, temporibus ipsa?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
          quasi modi reprehenderit accusamus sequi consequatur iste, placeat
          odit aliquam nobis fugit quae impedit perspiciatis nemo deleniti
          explicabo sunt quibusdam praesentium ut deserunt temporibus nisi? A
          unde culpa delectus cum dolorem. In, dolorem! Dolorum autem, illo vero
          voluptas nisi accusantium aspernatur placeat, inventore repellendus
          voluptatum ut nesciunt quae a officiis minus corrupti optio quam
          consequatur illum mollitia eaque magni. Esse quisquam rem rerum
          adipisci. Quia autem, dolorum incidunt deleniti quod assumenda! Velit
          sint quaerat aliquam esse accusantium? Quod aut blanditiis nobis
          quibusdam voluptate in impedit voluptatum sit ratione? Provident
          veritatis numquam, laboriosam tenetur placeat magnam accusantium,
          pariatur earum quam blanditiis qui nisi! Et ratione iure velit sed
          unde dolores pariatur, similique aut eum recusandae impedit tempora
          doloremque nobis doloribus ab voluptatibus natus facilis modi soluta
          laudantium, dignissimos dicta assumenda. Incidunt sit temporibus vero,
          deserunt, neque sint nam nulla, animi ea eaque quod eos corporis in
          assumenda corrupti! Laborum alias repellat quod id ipsam deleniti
          perferendis animi est, cumque accusamus quaerat inventore, deserunt,
          consequatur porro. Deleniti, corrupti similique est necessitatibus
          labore blanditiis sit atque perspiciatis tenetur. Harum, accusamus
          soluta reiciendis animi, impedit aperiam dolores, velit consequatur
          culpa molestias ullam alias sint. Distinctio?
        </p>
      </div>
    </section>
  );
};

export default PostDetail;
