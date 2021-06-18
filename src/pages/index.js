import Head from 'next/head'
import styled from 'styled-components'

const MainStyles = styled.div`
  color: var(--color-text);
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill, 100px);

  div {
    margin: 2rem;
    width: 100px;
    height: 100px;
    background: #fff0f3;
    border-radius: 1rem;
  }
`
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="100 Freestylers Dijeron" />
      </Head>

      <MainStyles>
        <div className="shadow-default">
          <p> default</p>
        </div>
        <div className="shadow-md">
          <p> md</p>
        </div>
        <div className="shadow-lg">
          <p> lg</p>
        </div>
        <div className="shadow-xl">
          <p> xl</p>
        </div>
        <div className="shadow-xxl">
          <p> xxl</p>
        </div>
        <div className="shadow-inner">
          <p> inner</p>
        </div>
      </MainStyles>
      <div>
        <div>
          <h1>Header 1</h1>
        </div>
        <div>
          <h2> Header 2</h2>
        </div>
        <div>
          <h3> Header 3</h3>
        </div>
        <div>
          <h4> Header 4</h4>
        </div>
        <div>
          <p> Body font</p>
        </div>
        <div>
          <p className="small"> Body small</p>
        </div>
        <div>
          <p>
            I’ve written <a href="/"> a few thousand words </a>on why
            traditional “semantic class names” Delectus repudiandae architecto
            minus debitis, libero provident obcaecati soluta expedita quod, rem
            ad. Suscipit reiciendis dolore tempora praesentium eaque accusamus
            animi magnam.
          </p>
        </div>
        <div>
          <p className="small">
            I’ve written <a href="/"> a few thousand words </a>on why
            traditional “semantic class names”.
          </p>
        </div>
      </div>
    </div>
  )
}
