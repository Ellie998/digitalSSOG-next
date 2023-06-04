import { useParams } from "react-router-dom";
import classes from "./Footer.module.css";

function Footer() {
  const params = useParams();

  // var disqus_config = function () {
  //   this.page.url = PAGE_URL; // Replace PAGE_URL with your page's canonical URL variable
  //   this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
  // };

  (function () {
    // DON'T EDIT BELOW THIS LINE
    var d = document,
      s = d.createElement("script");
    s.src = "https://disitalssog.disqus.com/embed.js";
    s.setAttribute("data-timestamp", +new Date());
    (d.head || d.body).appendChild(s);
  })();

  return (
    <footer className={classes.footer}>
      <section>
        <div id="disqus_thread"></div>

        <noscript>
          Please enable JavaScript to view the{" "}
          <a href="https://disqus.com/?ref_noscript">
            comments powered by Disqus.
          </a>
        </noscript>
      </section>
      <p>Copyright © upps</p>
    </footer>
  );
}

export default Footer;
