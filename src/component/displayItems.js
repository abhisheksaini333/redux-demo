const DisplayItems = (props) => {
    
    const List = ({ list }) => {
        if (list) {
            return list.map((item, index) => {
                return <div key={index}> {item.name}</div>
            })
        }
    }

    return (
        <div>{List(props)}</div>
    )
}

export default DisplayItems;