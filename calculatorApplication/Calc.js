function update(a) //input tag を更新する関数
{
    document.querySelector('input').value = a
}

function append(a)
{
    document.querySelector('input').value += a
} 

function calc() //「＝」ボタンが押されたので計算する
{
    const v = document.querySelector('input').value
    const f = new Function('return' + v)
    update(f().toString())
}