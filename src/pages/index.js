import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";
import Header from "./components/header.js";
import Image from "./components/img";
import scala from "./codeblocks";
import CodeSection from "./components/code.js";
import License from "./components/mit.js";
import both from "../../static/img/both.png";
import tree from "../../static/img/tree.png";
import modified from "../../static/img/modified_tree.png";
import license1 from "../../static/img/mit_license1.jpg";
import license2 from "../../static/img/mit_license2.png";

const theme = "dracula";
const language = "scala";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Zipper Overview">

      <Header title={siteConfig.title} tagline={siteConfig.tagline} />

      <main>
        <section className={styles.features}>
          <div className="container">
            <p>
              A Zipper is a tool that allows to navigate and modify immutable recursive data structures.
              This implementation is inspired by the  <a href="https://www.st.cs.uni-saarland.de/edu/seminare/2005/advanced-fp/docs/huet-zipper.pdf">original paper by Huet </a>, as well as the <a href="http://argonaut.io/doc/zipper/"> Argonaut’s JSON Zipper</a>.
            </p>
            <p>Consider the following example:</p>
            <div><CodeSection codeString={scala.tree}></CodeSection></div>

            <div>
              <Image src={tree} />
            </div>

            <div><p>Since the tree is immutable, modifying it can be a pain, but it’s easily solved with a Zipper:</p></div>
            <div><CodeSection codeString={scala.modifiedTree}></CodeSection></div>

            <div><p>Here’s what the modified tree looks like:</p></div>
            <div><Image src={modified} height="500px" /></div>
            <div><p>If we draw both trees side by side, we’ll see that the unchanged parts are shared:</p></div>
            <div><Image src={both} /></div>
            <Link id="Usage" href="#Usage">Usage</Link>
            <p>Include these lines in your build.sbt:</p>
            <div><CodeSection codeString={scala.usage}></CodeSection></div>
            <div>
              <Link id="Unzip" href="#Unzip">Unzip</Link>
              <p>In order for the Zipper to work on your data structure <code class="highlighter-rouge">Tree</code>, you need an implicit instance of <code class="highlighter-rouge">Unzip[Tree]</code>. <code class="highlighter-rouge">Unzip</code> is defined as follows:</p>
              <div><CodeSection codeString={scala.unzip}></CodeSection></div>
              <p>As we saw before, the library can automatically derive <code class="highlighter-rouge">Unzip[Tree]</code> if the Tree is a case class that has a single field of type <code class="highlighter-rouge">List[Tree]</code>. It is also possible to derive an <code class="highlighter-rouge">Unzip[Tree]</code> for similar cases, but with other collections:</p>
              <div><CodeSection codeString={scala.unzip2}></CodeSection></div>
              The automatic derivation is powered by <a href="https://github.com/milessabin/shapeless">shapeless</a>.
            </div>
            <br />
            <Link id="Moves" href="#Moves">Moves, failures and recovery</Link>

            <div>
              <div>There are many operations defined on a <code class="highlighter-rouge">Zipper</code>. Some of them are not safe, e.g. <code class="highlighter-rouge">moveLeft</code> will fail with an exception if there are no elements on the left. For all unsafe operations a safe version is provided, which is prefixed with <code class="highlighter-rouge">try</code>. These operations return a <code class="highlighter-rouge">Zipper.MoveResult</code>, which allows to recover from the failure or return to the original state:</div>
              <br />
              <div><CodeSection codeString={scala.moves}></CodeSection></div>
            </div>
            <Link id="Loops" href="#Loops">Loops</Link>
            <br />
            <br />
            <div>
              <code class="highlighter-rouge">Zipper</code> provides a looping functionality, which can be useful with recursive data:
              <br />
              <br />
              <div><CodeSection codeString={scala.loops}></CodeSection></div>
            </div>
            <p>
              This work is licensed under
              <a href="https://opensource.org/license/mit/" target="_blank">
                <License src={license1} alt="MIT License" width="50px" height="40px" />
              </a>
              <a href="https://opensource.org/license/mit/" target="_blank">
                <License src={license2} alt="MIT License" width="50px" height="40px" />
              </a>
            </p>
          </div>
        </section>
      </main>
    </Layout >
  );
}

export default Home;
