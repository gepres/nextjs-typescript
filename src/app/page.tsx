'use client';
import { useBreakpoints } from "@/config";;

export default function Home() {
  const {isXs,active, dispositivo} = useBreakpoints();
  // const dispatch = useAppDispatch()
  // const { mobile } = useAppSelector(state => state.breakPoints)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      hola
      <br />
      {JSON.stringify(isXs)}
      <br />
      {active}
      <br />
      {dispositivo}
      {/* {JSON.stringify(mobile)} */}
      {/* {JSON.stringify(isMobileAndTable)} */}
      <code className='flex-wrap'>
        {JSON.stringify(useBreakpoints())}
      </code>
    </main>
  );
}
