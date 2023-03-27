import data from '../assets/data.json';

function Content() {
  let total = 0;
  const highest = Math.max(...data.map((item) => item.amount));
  for (let i = 0; i < data.length; i++) {
    total += data[i].amount;
  }
  return (
    <main className='bg-Verypaleorange p-5 rounded-lg md:rounded-2xl my-5 shadow-sm text-Darkbrown w-full '>
      <section>
        <h2 className='text-xl lg:text-3xl font-bold '>
          Spending - Last 7 days
        </h2>
        <div className='flex  text-center justify-center items-center '>
          {data.map((expenses) => (
            <div key={expenses.day}>
              <div className='h-[220px] md:h-[220px] flex flex-col-reverse items-center w-full '>
                <div
                  className={`${
                    expenses.amount === highest ? 'bg-Cyan' : 'bg-Softred'
                  } rounded-[4px]  w-8 md:w-12 my-2 hover:bg-opacity-70 cursor-pointer peer mx-1`}
                  style={{
                    height: `${(expenses.amount / total) * 280}%`,
                  }}
                />
                <div className=' bg-Darkbrown text-Verypaleorange rounded-[4px]  leading-none  peer-hover:visible peer-hover:w-auto text-[12px] lg:text-[18px] invisible p-1 md:p-2 '>
                  ${expenses.amount}
                </div>
              </div>
              <span className='text-Mediumbrown text-sm lg:text-[18px]'>
                {expenses.day}
              </span>
            </div>
          ))}
        </div>
      </section>

      <hr className='my-5 border-Cream border-[1px]' />

      <section className='flex justify-between mb-1'>
        <div>
          <p className='text-Mediumbrown text-sm lg:text-[18px] leading-10 '>
            Total this month
          </p>
          <h2 className='font-bold text-[31px] lg:text-[45px] leading-none'>
            $478.33
          </h2>
        </div>
        <div className=' text-right mt-auto text-sm lg:text-[18px]'>
          <h3 className='font-bold '>+2.4%</h3>
          <span className='text-Mediumbrown '>from last month</span>
        </div>
      </section>
    </main>
  );
}

export default Content;
