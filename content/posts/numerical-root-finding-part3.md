+++
date = '2024-12-14T15:00:36-03:00'
draft = false
title = 'Numerical root-finding algorithms: An unconventional approach. Part3'
+++
**An unconventional approach to solving with Lambert's W function**

Before we move on to a practical real-world use case for an approximation root-finding algorithm, I want to share an anecdote from a time when, out of simple curiosity and a bit of boredom, I managed to solve an equation typically requiring the Lambert W function by approximating the root using the Newton-Raphson method.

## 1. The video
One day, a [video](https://www.youtube.com/watch?v=mJwfpcXwYRU) on solving the equation \(2^x + x = 5\) popped up in my YouTube feed. The \(x\) in the exponent immediately piqued my curiosity. After watching the entire video, I was introduced to the Lambert W function—"Nice to meet you," I thought. For a moment, I debated whether I should dive deeper into learning about it, or consider how I might use it in the future. Then, I took another look at the equation and noticed it was a differentiable function. That's when it hit me: I should tackle the problem using one of the root-finding algorithms.

## 2. Hands on
Let's methodologically assemble the iterative equation and see if we can converge into a root. 
From here, the Newton-Raphson iterative formula is applied:

$$
\begin{align}
2^x+x &= 5 &\text{this is the equation we want to solve} \\
2^x+x -5 &= 0 &\text{rearrange to express it in standard form}\\
f(x) &= 2^{x} + x - 5 &\text{define f(x) as the fucntion whose root we seek}\\
f'(x) &= 2^{x} \cdot log(2) + 1 &\text{the derivative} \\
f'(x) &= 0,3010299957 \cdot 2^{x} + 1  & \text{we can use log(2) as a constant from here} \\
\\
x_{n+1} &= x_{n}-\frac{f(x_{n})}{f'(x_{n})} \\
\\
x_{n+1} &= x_{n}-\frac{2^{x_{n}} + x_{n} - 5}{0,3010299957 \cdot 2^{x_{n}} + 1} & \text{the ecuation we will iterate} \\
\\
precicion &= 0,0000001 \\
\end{align}
$$ With a precision threshold of 7, the iterations proceed as follows:
$$
\begin{align}
x_{0} &= 1 & \text{initial guess} \\
x_{1} &= x_{0}-\frac{2^{x_{0}} + x_{0} - 5}{log(2) \cdot 2^{x_{0}} + 1}&=1,0 - \frac{2^{1,0} + 1,0- 5}{0,3010299957 \cdot 2^{1,0} + 1}&={\color{gray}2,248392701} &|x_{1}-x_{0}| &=1,2483927 \\
x_{2} &= x_{1}-\frac{2^{x_{1}} + x_{1} - 5}{log(2) \cdot 2^{x_{1}} + 1}&=2,2483927 - \frac{2^{2,2483927} + 2,2483927- 5}{0,3010299957 \cdot 2^{2,2483927} + 1}&={\color{red}\underline{1,}}{\color{gray}425498229} &|x_{2}-x_{1}| &=0,82289447 \\
x_{3} &= x_{2}-\frac{2^{x_{2}} + x_{2} - 5}{log(2) \cdot 2^{x_{2}} + 1}&=1,42549823 - \frac{2^{1,42549823} + 1,42549823- 5}{0,3010299957 \cdot 2^{1,42549823} + 1}&={\color{red}\underline{1,}}{\color{gray}916726255} &|x_{3}-x_{2}| &=0,49122803 \\
x_{4} &= x_{3}-\frac{2^{x_{3}} + x_{3} - 5}{log(2) \cdot 2^{x_{3}} + 1}&=1,91672625 - \frac{2^{1,91672625} + 1,91672625- 5}{0,3010299957 \cdot 2^{1,91672625} + 1}&={\color{red}\underline{1,}}{\color{gray}592667304} &|x_{4}-x_{3}| &=0,32405895 \\
x_{5} &= x_{4}-\frac{2^{x_{4}} + x_{4} - 5}{log(2) \cdot 2^{x_{4}} + 1}&=1,5926673 - \frac{2^{1,5926673} + 1,5926673- 5}{0,3010299957 \cdot 2^{1,5926673} + 1}&={\color{red}\underline{1,}}{\color{gray}797742433} &|x_{5}-x_{4}| &=0,20507513 \\
x_{6} &= x_{5}-\frac{2^{x_{5}} + x_{5} - 5}{log(2) \cdot 2^{x_{5}} + 1}&=1,79774243 - \frac{2^{1,79774243} + 1,79774243- 5}{0,3010299957 \cdot 2^{1,79774243} + 1}&={\color{red}\underline{1,}}{\color{gray}663618132} &|x_{6}-x_{5}| &=0,1341243 \\
x_{7} &= x_{6}-\frac{2^{x_{6}} + x_{6} - 5}{log(2) \cdot 2^{x_{6}} + 1}&=1,66361813 - \frac{2^{1,66361813} + 1,66361813- 5}{0,3010299957 \cdot 2^{1,66361813} + 1}&={\color{red}\underline{1,7}}{\color{gray}49753096} &|x_{7}-x_{6}| &=0,08613496 \\
x_{8} &= x_{7}-\frac{2^{x_{7}} + x_{7} - 5}{log(2) \cdot 2^{x_{7}} + 1}&=1,7497531 - \frac{2^{1,7497531} + 1,7497531- 5}{0,3010299957 \cdot 2^{1,7497531} + 1}&={\color{red}\underline{1,6}}{\color{gray}93718007} &|x_{8}-x_{7}| &=0,05603509 \\
x_{9} &= x_{8}-\frac{2^{x_{8}} + x_{8} - 5}{log(2) \cdot 2^{x_{8}} + 1}&=1,69371801 - \frac{2^{1,69371801} + 1,69371801- 5}{0,3010299957 \cdot 2^{1,69371801} + 1}&={\color{red}\underline{1,7}}{\color{gray}29886296} &|x_{9}-x_{8}| &=0,03616829 \\
x_{10} &= x_{9}-\frac{2^{x_{9}} + x_{9} - 5}{log(2) \cdot 2^{x_{9}} + 1}&=1,7298863 - \frac{2^{1,7298863} + 1,7298863- 5}{0,3010299957 \cdot 2^{1,7298863} + 1}&={\color{red}\underline{1,7}}{\color{gray}06417426} &|x_{10}-x_{9}| &=0,02346887 \\
x_{11} &= x_{10}-\frac{2^{x_{10}} + x_{10} - 5}{log(2) \cdot 2^{x_{10}} + 1}&=1,70641743 - \frac{2^{1,70641743} + 1,70641743- 5}{0,3010299957 \cdot 2^{1,70641743} + 1}&={\color{red}\underline{1,7}}{\color{gray}21595160} &|x_{11}-x_{10}| &=0,01517773 \\
x_{12} &= x_{11}-\frac{2^{x_{11}} + x_{11} - 5}{log(2) \cdot 2^{x_{11}} + 1}&=1,72159516 - \frac{2^{1,72159516} + 1,72159516- 5}{0,3010299957 \cdot 2^{1,72159516} + 1}&={\color{red}\underline{1,71}}{\color{gray}1757864} &|x_{12}-x_{11}| &=0,0098373 \\
x_{13} &= x_{12}-\frac{2^{x_{12}} + x_{12} - 5}{log(2) \cdot 2^{x_{12}} + 1}&=1,71175786 - \frac{2^{1,71175786} + 1,71175786- 5}{0,3010299957 \cdot 2^{1,71175786} + 1}&={\color{red}\underline{1,71}}{\color{gray}8124841} &|x_{13}-x_{12}| &=0,00636698 \\
x_{14} &= x_{13}-\frac{2^{x_{13}} + x_{13} - 5}{log(2) \cdot 2^{x_{13}} + 1}&=1,71812484 - \frac{2^{1,71812484} + 1,71812484- 5}{0,3010299957 \cdot 2^{1,71812484} + 1}&={\color{red}\underline{1,71}}{\color{gray}4000170} &|x_{14}-x_{13}| &=0,00412467 \\
x_{15} &= x_{14}-\frac{2^{x_{14}} + x_{14} - 5}{log(2) \cdot 2^{x_{14}} + 1}&=1,71400017 - \frac{2^{1,71400017} + 1,71400017- 5}{0,3010299957 \cdot 2^{1,71400017} + 1}&={\color{red}\underline{1,71}}{\color{gray}6670644} &|x_{15}-x_{14}| &=0,00267047 \\
x_{16} &= x_{15}-\frac{2^{x_{15}} + x_{15} - 5}{log(2) \cdot 2^{x_{15}} + 1}&=1,71667064 - \frac{2^{1,71667064} + 1,71667064- 5}{0,3010299957 \cdot 2^{1,71667064} + 1}&={\color{red}\underline{1,71}}{\color{gray}4941009} &|x_{16}-x_{15}| &=0,00172964 \\
x_{17} &= x_{16}-\frac{2^{x_{16}} + x_{16} - 5}{log(2) \cdot 2^{x_{16}} + 1}&=1,71494101 - \frac{2^{1,71494101} + 1,71494101- 5}{0,3010299957 \cdot 2^{1,71494101} + 1}&={\color{red}\underline{1,71}}{\color{gray}6060995} &|x_{17}-x_{16}| &=0,00111999 \\
x_{18} &= x_{17}-\frac{2^{x_{17}} + x_{17} - 5}{log(2) \cdot 2^{x_{17}} + 1}&=1,716061 - \frac{2^{1,716061} + 1,716061- 5}{0,3010299957 \cdot 2^{1,716061} + 1}&={\color{red}\underline{1,715}}{\color{gray}335657} &|x_{18}-x_{17}| &=0,00072534 \\
x_{19} &= x_{18}-\frac{2^{x_{18}} + x_{18} - 5}{log(2) \cdot 2^{x_{18}} + 1}&=1,71533566 - \frac{2^{1,71533566} + 1,71533566- 5}{0,3010299957 \cdot 2^{1,71533566} + 1}&={\color{red}\underline{1,715}}{\color{gray}805360} &|x_{19}-x_{18}| &=0,0004697 \\
x_{20} &= x_{19}-\frac{2^{x_{19}} + x_{19} - 5}{log(2) \cdot 2^{x_{19}} + 1}&=1,71580536 - \frac{2^{1,71580536} + 1,71580536- 5}{0,3010299957 \cdot 2^{1,71580536} + 1}&={\color{red}\underline{1,715}}{\color{gray}501177} &|x_{20}-x_{19}| &=0,00030418 \\
x_{21} &= x_{20}-\frac{2^{x_{20}} + x_{20} - 5}{log(2) \cdot 2^{x_{20}} + 1}&=1,71550118 - \frac{2^{1,71550118} + 1,71550118- 5}{0,3010299957 \cdot 2^{1,71550118} + 1}&={\color{red}\underline{1,715}}{\color{gray}698160} &|x_{21}-x_{20}| &=0,00019698 \\
x_{22} &= x_{21}-\frac{2^{x_{21}} + x_{21} - 5}{log(2) \cdot 2^{x_{21}} + 1}&=1,71569816 - \frac{2^{1,71569816} + 1,71569816- 5}{0,3010299957 \cdot 2^{1,71569816} + 1}&={\color{red}\underline{1,715}}{\color{gray}570594} &|x_{22}-x_{21}| &=0,00012757 \\
x_{23} &= x_{22}-\frac{2^{x_{22}} + x_{22} - 5}{log(2) \cdot 2^{x_{22}} + 1}&=1,71557059 - \frac{2^{1,71557059} + 1,71557059- 5}{0,3010299957 \cdot 2^{1,71557059} + 1}&={\color{red}\underline{1,7156}}{\color{gray}53204} &|x_{23}-x_{22}| &=0,00008261 \\
x_{24} &= x_{23}-\frac{2^{x_{23}} + x_{23} - 5}{log(2) \cdot 2^{x_{23}} + 1}&=1,7156532 - \frac{2^{1,7156532} + 1,7156532- 5}{0,3010299957 \cdot 2^{1,7156532} + 1}&={\color{red}\underline{1,7155}}{\color{gray}99706} &|x_{24}-x_{23}| &=0,0000535 \\
x_{25} &= x_{24}-\frac{2^{x_{24}} + x_{24} - 5}{log(2) \cdot 2^{x_{24}} + 1}&=1,71559971 - \frac{2^{1,71559971} + 1,71559971- 5}{0,3010299957 \cdot 2^{1,71559971} + 1}&={\color{red}\underline{1,7156}}{\color{gray}34350} &|x_{25}-x_{24}| &=0,00003464 \\
x_{26} &= x_{25}-\frac{2^{x_{25}} + x_{25} - 5}{log(2) \cdot 2^{x_{25}} + 1}&=1,71563435 - \frac{2^{1,71563435} + 1,71563435- 5}{0,3010299957 \cdot 2^{1,71563435} + 1}&={\color{red}\underline{1,7156}}{\color{gray}11915} &|x_{26}-x_{25}| &=0,00002244 \\
x_{27} &= x_{26}-\frac{2^{x_{26}} + x_{26} - 5}{log(2) \cdot 2^{x_{26}} + 1}&=1,71561191 - \frac{2^{1,71561191} + 1,71561191- 5}{0,3010299957 \cdot 2^{1,71561191} + 1}&={\color{red}\underline{1,7156}}{\color{gray}26444} &|x_{27}-x_{26}| &=0,00001453 \\
x_{28} &= x_{27}-\frac{2^{x_{27}} + x_{27} - 5}{log(2) \cdot 2^{x_{27}} + 1}&=1,71562644 - \frac{2^{1,71562644} + 1,71562644- 5}{0,3010299957 \cdot 2^{1,71562644} + 1}&={\color{red}\underline{1,71561}}{\color{gray}7035} &|x_{28}-x_{27}| &=0,00000941 \\
x_{29} &= x_{28}-\frac{2^{x_{28}} + x_{28} - 5}{log(2) \cdot 2^{x_{28}} + 1}&=1,71561704 - \frac{2^{1,71561704} + 1,71561704- 5}{0,3010299957 \cdot 2^{1,71561704} + 1}&={\color{red}\underline{1,71562}}{\color{gray}3128} &|x_{29}-x_{28}| &=0,00000609 \\
x_{30} &= x_{29}-\frac{2^{x_{29}} + x_{29} - 5}{log(2) \cdot 2^{x_{29}} + 1}&=1,71562313 - \frac{2^{1,71562313} + 1,71562313- 5}{0,3010299957 \cdot 2^{1,71562313} + 1}&={\color{red}\underline{1,71561}}{\color{gray}9182} &|x_{30}-x_{29}| &=0,00000395 \\
x_{31} &= x_{30}-\frac{2^{x_{30}} + x_{30} - 5}{log(2) \cdot 2^{x_{30}} + 1}&=1,71561918 - \frac{2^{1,71561918} + 1,71561918- 5}{0,3010299957 \cdot 2^{1,71561918} + 1}&={\color{red}\underline{1,71562}}{\color{gray}1738} &|x_{31}-x_{30}| &=0,00000256 \\
x_{32} &= x_{31}-\frac{2^{x_{31}} + x_{31} - 5}{log(2) \cdot 2^{x_{31}} + 1}&=1,71562174 - \frac{2^{1,71562174} + 1,71562174- 5}{0,3010299957 \cdot 2^{1,71562174} + 1}&={\color{red}\underline{1,71562}}{\color{gray}0083} &|x_{32}-x_{31}| &=0,00000165 \\
x_{33} &= x_{32}-\frac{2^{x_{32}} + x_{32} - 5}{log(2) \cdot 2^{x_{32}} + 1}&=1,71562008 - \frac{2^{1,71562008} + 1,71562008- 5}{0,3010299957 \cdot 2^{1,71562008} + 1}&={\color{red}\underline{1,71562}}{\color{gray}1154} &|x_{33}-x_{32}| &=0,00000107 \\
x_{34} &= x_{33}-\frac{2^{x_{33}} + x_{33} - 5}{log(2) \cdot 2^{x_{33}} + 1}&=1,71562115 - \frac{2^{1,71562115} + 1,71562115- 5}{0,3010299957 \cdot 2^{1,71562115} + 1}&={\color{red}\underline{1,715620}}{\color{gray}461} &|x_{34}-x_{33}| &=0,00000069 \\
x_{35} &= x_{34}-\frac{2^{x_{34}} + x_{34} - 5}{log(2) \cdot 2^{x_{34}} + 1}&=1,71562046 - \frac{2^{1,71562046} + 1,71562046- 5}{0,3010299957 \cdot 2^{1,71562046} + 1}&={\color{red}\underline{1,715620}}{\color{gray}910} &|x_{35}-x_{34}| &=0,00000045 \\
x_{36} &= x_{35}-\frac{2^{x_{35}} + x_{35} - 5}{log(2) \cdot 2^{x_{35}} + 1}&=1,71562091 - \frac{2^{1,71562091} + 1,71562091- 5}{0,3010299957 \cdot 2^{1,71562091} + 1}&={\color{red}\underline{1,715620}}{\color{gray}619} &|x_{36}-x_{35}| &=0,00000029 \\
x_{37} &= x_{36}-\frac{2^{x_{36}} + x_{36} - 5}{log(2) \cdot 2^{x_{36}} + 1}&=1,71562062 - \frac{2^{1,71562062} + 1,71562062- 5}{0,3010299957 \cdot 2^{1,71562062} + 1}&={\color{red}\underline{1,715620}}{\color{gray}807} &|x_{37}-x_{36}| &=0,00000019 \\
x_{38} &= x_{37}-\frac{2^{x_{37}} + x_{37} - 5}{log(2) \cdot 2^{x_{37}} + 1}&=1,71562081 - \frac{2^{1,71562081} + 1,71562081- 5}{0,3010299957 \cdot 2^{1,71562081} + 1}&={\color{red}\underline{1,715620}}{\color{gray}685} &|x_{38}-x_{37}| &=0,00000012 \\
x_{39} &= x_{38}-\frac{2^{x_{38}} + x_{38} - 5}{log(2) \cdot 2^{x_{38}} + 1}&=1,71562069 - \frac{2^{1,71562069} + 1,71562069- 5}{0,3010299957 \cdot 2^{1,71562069} + 1}&={\color{red}\underline{1,7156207}}{\color{gray}64} &|x_{39}-x_{38}| &=0,00000008 \\
\end{align}
$$
It took 39 iterations to achieve 7-decimal precision for the root. While this number seems high, the convergence was steady, with significant progress in the first 10 iterations.
## 3. Wrapping up
Using a root-finding algorithm like **Newton-Raphson** to solve instead of the **Lambert W** function offers several advantages in implementation simplicity. The Lambert W function is mathematically elegant but *less commonly supported in programming libraries*, making its direct application a challenge in some environments. On the other hand, root-finding algorithms require only basic mathematical tools available in almost every computational framework.

Despite requiring 39 iterations to achieve a solution with 7-decimal precision, the iterative process was straightforward. It followed a mechanical pattern: evaluate the function, compute the derivative, and update the guess. In cases where computational time is not critical—like this mathematical exploration—such methods provide a robust alternative that leverages fundamental calculus.

This journey underscores the versatility of mathematical problem-solving. By revisiting a problem with a fresh perspective, we see how classical techniques can rival or complement specialized tools. Whether for academic curiosity or practical applications, understanding these foundational approaches broadens our computational toolkit.

## Links
- [Numerical root-finding algorithms: Foundations, theory, and advanced methods. Part 1](https://padiazg.github.io/posts/numerical-root-finding-part1/)
- [Numerical root-finding algorithms: Bisection, Newton-Raphson and Secant. Part2](https://padiazg.github.io/posts/numerical-root-finding-part2/)
- Numerical root-finding algorithms: An unconventional approach. Part3