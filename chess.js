/* chess.js */
let chessBoard = document.querySelector('.chess');

function blackWhiteBoard()
{
    let ausgabe = '';
    
    for (let i = 1; i < 9; i++)
    {
        ausgabe += "<tr>";
        
        for(let j = 1; j < 9; j++)
        {
            if(i % 2 === 0)
            {
                if(j % 2 === 0)
                {
                    ausgabe += '<td class="white">' + "</td>";
                } 
                else 
                {
                    ausgabe += '<td class="black">' + "</td>";
                }
            } 
            else 
            {
                if(j % 2 === 0)
                {
                    ausgabe += '<td class="black">' + "</td>";
                } 
                else 
                {
                    ausgabe += '<td class="white">' + "</td>";
                }
            }
        }
        ausgabe += "</tr>";
    }
    chessBoard.innerHTML = ausgabe;
}
blackWhiteBoard();