import React, {useState} from "react";


export const Hook = () => {

    // let [count, setCount] = useState(0)
    //
    // const upCount = () => {
    //     setCount(count + 1)
    // }
    // const downCount = () => {
    //     setCount(count - 1)
    // }
    // return (
    //
    //
    //     <div>
    //         <strong> Count: {count}</strong>
    //         <button onClick={upCount}>Добавить</button>
    //         <button onClick={downCount}>Убавить</button>
    //     </div>
    //
    //
    // )


let [ profile, setProfile] = useState({
    name: "Zalupa",
    age: 23
})

    const onName = (e) => {
    setProfile( {...profile, name:  e.target.value})
    }
    const onNumber = (e) => {
        setProfile({...profile, age: e.target.value})
    }


    return(
    <div>
        <form action="">
            <input type="text" value={profile.name} onChange={onName}/>
            <input type="number" value={profile.age} onChange={onNumber}/>
            <h2>Name : {profile.name} age: {profile.age}</h2>
        </form>
    </div>
)





}