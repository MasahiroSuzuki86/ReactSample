import React from 'react'

//Titleを渡すためのContext
const TitleContext = React.createContext('')

//Titleコンポーネントの中でContextの値を参照(Consumer)
const Title = () => {
  return (
    <TitleContext.Consumer>
      {(title) => {
        return <h1>{title}</h1>
      }}
    </TitleContext.Consumer>
  )
}

const Header = () => {
  return (
    <div>
      <Title />
    </div>
  )
}

//Pageコンポーネントの中でContextに値を渡す(Provider)
const Page = () => {
  const title = 'React Book'

  return (
    <TitleContext.Provider value={title}>
      <Header />
    </TitleContext.Provider>
  )
}

export default Page
