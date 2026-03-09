
const Pagination = ({currentPage, totalPages, setCurrentPage}) => {

    //convert numbers into array
    //const pageNumbers = [...Array(totalPages)].map()

    const disbaledStyle = {
        color : 'white',
        backgroundColor : 'grey',
        padding : '5px',
        textDecoration : 'line-through',
        borderRadius : '10px'
    }

    const normalStyled = {
        color : 'black',
        fontWeight : 'bold',
        backgroundColor : 'orange',
        padding : '5px',
        borderRadius : '10px'
    }

  return (
    <div className='flex gap-5 justify-center text-2xl mt-4'>
        <button
            disabled={currentPage === 1}
            onClick={()=>setCurrentPage(currentPage - 1)}
            style={{...(currentPage === 1 ? disbaledStyle : normalStyled)}}
        >
            Prev
        </button>
        <button>
            {currentPage} / {totalPages}
        </button>
        <button
            disabled={currentPage === totalPages}
            onClick={()=>setCurrentPage(currentPage + 1)}
            style={{...(currentPage === totalPages ? disbaledStyle : normalStyled)}}
        >
            Next
        </button>
    </div>
  )
}

export default Pagination