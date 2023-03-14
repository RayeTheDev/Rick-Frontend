import loading from "./assets/loading.gif"
export const Loading = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        zIndex: 5,
        width: '100%',
        height: '100vh',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
    <img src={loading&&loading} style={{transform:"scale(50%)"}}/>
    </div>
  )
}
