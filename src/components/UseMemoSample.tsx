import React, { useState, useMemo } from "react"

// import { UseMemoSample } from ... で使用する
export const UseMemoSample = () => {
  //textは現在のテキストボックスの中身の値を保持
  const [text, setText] = useState('')
  //itemsは文字列のリストを保持
  const [items, setItems] = useState<String[]>([])

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  //ボタンをクリックした時に呼ばれる関数
  const onClickButton = () => {
    setItems((prevItems) => {
      //現在の入力値をitemsに追加する、この時新しい配列を作成して保存する
      return [...prevItems, text]
    })
    //テキストボックスの中の値を空にする
    setText('')
  }

  // 再描画の度にitems.reduceを実行
  const numberOfCharacters1 = items.reduce((sub, item) => sub + item.length, 0)
  //itemsが更新されるタイミングでitems.reduceを実行
  const numberOfCharacters2 = useMemo(() => {
    return items.reduce((sub, item) => sub + item.length, 0)
    //itemsが新しくなった時だけ関数を実行、メモを更新
  }, [items])

  return (
    <div>
      <p>UseMemoSample</p>
      <div>
        <input value={text} onChange={onChangeInput} />
        <button onClick={onClickButton}>Add</button>
      </div>
      <div>
          {items.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
      </div>
      <div>
        <p>Total Number of Characters 1: {numberOfCharacters1}</p>
        <p>Total Number of Characters 2: {numberOfCharacters2}</p>
      </div>
    </div>
  )
}
