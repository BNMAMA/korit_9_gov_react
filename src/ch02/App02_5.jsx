function App02_5() {

    const [ value, setValue ] = useState("");
    const [ writer, setWriter ] = useState("");
    return <>
        <div>
            <input type="text" />
            <input type="text" />
            <button></button>
        </div>
    </>
}

function handleInputChange({value, setValue, writer, setWriter}) {
    const handleInputContent = (e) => {
        setValue(e.target.value);
    }

    const handleInputWriter = (e) => {
        setWriter(e.target.value);
    }
}

export default App02_5;