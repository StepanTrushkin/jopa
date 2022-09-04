import "./SecondPage.modules.scss";
import BlockList from "../../components/BlockList/BlockList";
import Block from "../../components/Block/Bloc";
function SecondPage() {
    return (
        <>
            <div className="secondPage">
                <BlockList>
                    <Block />
                    <Block />
                    <Block />
                    <Block />
                    <Block />
                    <Block />
                    <Block />
                    <Block />
                </BlockList>
                <nav className="secondPageNav">
                    <button>Hello</button>
                </nav>

                <section id="sec1">
                    <h1>Section 1</h1>
                </section>
                <section id="sec2">
                    <h1>Section 2</h1>
                </section>
                <section id="sec3">
                    <h1>Section 3</h1>
                </section>

                {/* <span>
                <Link to="/main" className="link">
                    Second
                </Link>
            </span> */}
            </div>
        </>
    );
}

export default SecondPage;
