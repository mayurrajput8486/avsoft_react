
const Pagination = ({currentPage, totalPages, setCurrentPage}) => {

    //convert numbers into array
    const pageNumbers = [...Array(totalPages)].map((a,index)=>{
        return index + 1
    })

    console.log(pageNumbers)

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

    const baseStyled = {
        color : 'white',
        fontWeight : 'bold',
        backgroundColor : 'black',
        padding : '10px',
        borderRadius : '10px'
    }

    const activeStyled = {
        color : 'white',
        fontWeight : 'bold',
        backgroundColor : 'red',
        padding : '10px',
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
        {/* 
            <button>
                {currentPage} / {totalPages}
            </button> 
        */}

        {/* To provide page number button we have to iterate the pageNumber array with the help of map() */}
       
        {
            pageNumbers.map((page)=>{
                return(
                    <button 
                        key={page}
                        onClick={()=>setCurrentPage(page)}
                        style={{
                            ...baseStyled,  //basic styled object
                            ...(currentPage === page ? activeStyled : baseStyled) //for current active page
                        }}
                    >
                            {page}
                    </button>
                )
            })
        }


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