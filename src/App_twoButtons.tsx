import "./styles.css";

export const APP_TWO_BUTTONS = () => {
  // const myFirstSubscriber = () => {
  //   console.log("Hello! Im VASYA !");
  // };

  // const mySecondSubscriber = () => {
  //   console.log("Hello! Ivan here !");
  // };

  // const onClickHadler = (name:string)=>{
  //   console.log(name)
  // }

  const foo1 = () => {
    //ничего не передовать,но в консоли должно быть 100200
    console.log("Айти камасутраааа!!! Сделает тебя программером !!!");
  };

  const foo2 = (somedata: string) => {
    //передать цифру 100200 из кнопки
    alert(somedata);
  };

  return (
    <div className="App">
      {/* <button onClick={
        (event:MouseEvent<HTMLButtonElement>)=>
        onClickHadler("Vasya")
        }>MyYouTubeChannel-1</button> */}

      <button onClick={foo1}>See console</button>

      <button onClick={() => foo2("Учи джаваскрипт на ! На нашем канале !")}>
        Its Alert
      </button>
    </div>
  );
};
