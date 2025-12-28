import image from './logo.svg'
function App() {
    const imgData = {
        className: 'small',
        src: image,
        style: {
            width: 100,
            height: '100px',
            backgroundColor: 'gray'
        }
    }
    return (
        <div>
            <img
                alt="logo"
                {...imgData}
            />
        </div>
    )
}
export default App