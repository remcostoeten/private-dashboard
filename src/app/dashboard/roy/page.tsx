import * as React from 'react'

function MyComponent() {
  return (
    <div className="flex flex-col items-center px-5">
      <div className="flex justify-center items-center self-stretch px-16 w-full text-sm leading-7 border-b border-solid border-zinc-800 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between px-8 w-full max-w-screen-xl max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 justify-between items-center text-zinc-300 max-md:flex-wrap">
            <div className="flex gap-3 self-stretch py-2.5 text-base font-medium text-white whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5392ad5d8be84420c1978fa9f7048ad93ede3ae77838427ebcd0e9388c166388?apiKey=2a72745ec00444ad9fe2bd2391d98932&"
                className="shrink-0 my-auto w-5 aspect-[0.83]"
              />
              <div>Pandem</div>
            </div>
            <div className="self-stretch my-auto">Docs</div>
            <div className="self-stretch my-auto">Pricing</div>
            <div className="self-stretch my-auto">Status</div>
            <div className="self-stretch my-auto">FAQs</div>
            <div className="self-stretch my-auto">Contact Us</div>
          </div>
          <div className="flex gap-5 justify-between my-auto">
            <div className="my-auto text-zinc-300">Login</div>
            <div className="justify-center px-4 py-0.5 font-semibold rounded-md bg-neutral-50 text-zinc-900">
              Sign Up
            </div>
          </div>
        </div>
      </div>
      <div className="mt-36 text-5xl font-extrabold tracking-tight leading-10 text-center text-neutral-50 w-[672px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-10">
        Information you need during on-call emergencies
      </div>
      <div className="mt-6 text-lg leading-5 text-center text-zinc-300 w-[672px] max-md:max-w-full">
        Quickly link new on-call tickets to similar past incidents and their
        solutions. All directly in Slack the moment an incident happens.
      </div>
      <div className="flex gap-2 justify-center px-4 py-0.5 mt-12 text-sm font-semibold leading-7 rounded-md bg-neutral-50 text-zinc-900 max-md:mt-10">
        <div>Get started</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/57a569b9e18a3c63ad1daca34ab9e69d8e24d409f3d4ba7887498b4b23860c3e?apiKey=2a72745ec00444ad9fe2bd2391d98932&"
          className="shrink-0 my-auto w-1 border-2 border-black border-solid aspect-[0.5] stroke-[2px] stroke-black"
        />
      </div>
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2ac510d989744a8f3d01e84eccf06a02b47d2ddfaa3e7b56eccd60a320908f8e?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ac510d989744a8f3d01e84eccf06a02b47d2ddfaa3e7b56eccd60a320908f8e?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ac510d989744a8f3d01e84eccf06a02b47d2ddfaa3e7b56eccd60a320908f8e?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ac510d989744a8f3d01e84eccf06a02b47d2ddfaa3e7b56eccd60a320908f8e?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ac510d989744a8f3d01e84eccf06a02b47d2ddfaa3e7b56eccd60a320908f8e?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ac510d989744a8f3d01e84eccf06a02b47d2ddfaa3e7b56eccd60a320908f8e?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ac510d989744a8f3d01e84eccf06a02b47d2ddfaa3e7b56eccd60a320908f8e?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ac510d989744a8f3d01e84eccf06a02b47d2ddfaa3e7b56eccd60a320908f8e?apiKey=2a72745ec00444ad9fe2bd2391d98932&"
        className="mt-12 w-full max-w-screen-lg aspect-[1.61] max-md:mt-10 max-md:max-w-full"
      />
      <div className="flex flex-col items-center px-16 pt-20 mt-12 w-full max-w-screen-xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col items-center mt-4 max-w-full w-[960px]">
          <div className="text-5xl font-extrabold tracking-tight leading-10 text-center text-neutral-50 max-md:max-w-full max-md:text-4xl">
            Quick solutions, less stress
          </div>
          <div className="flex-wrap justify-center content-start self-stretch mt-12 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-10">
                  <div className="flex justify-center items-center px-4 w-14 h-14 rounded-md border border-solid bg-zinc-950 border-zinc-800">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0538427ae8c5422c835a43b342ef811eeee7f0857fa70bd7698865544449c22?apiKey=2a72745ec00444ad9fe2bd2391d98932&"
                      className="w-full aspect-square"
                    />
                  </div>
                  <div className="mt-6 text-2xl font-semibold tracking-normal leading-8 text-zinc-300">
                    Fix emergencies fast
                  </div>
                  <div className="mt-6 text-sm leading-7 text-zinc-300">
                    Save 20-30 minutes per on-call ticket - no more searching
                    for relevant issues and runbooks
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-10">
                  <div className="flex justify-center items-center px-4 w-14 h-14 rounded-md border border-solid bg-zinc-950 border-zinc-800">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab9c00fd58e49fade0cced1cb0dd02d6c744e75c07f7b90293d5b8ff84baa42e?apiKey=2a72745ec00444ad9fe2bd2391d98932&"
                      className="w-full aspect-square"
                    />
                  </div>
                  <div className="mt-6 text-2xl font-semibold tracking-normal leading-8 text-zinc-300">
                    Universally compatible
                  </div>
                  <div className="mt-6 text-sm leading-7 text-zinc-300">
                    Works with PagerDuty, Jira, or custom Slack alerts—Pandem
                    integrates with any system
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col max-md:mt-10">
                  <div className="flex justify-center items-center px-4 w-14 h-14 rounded-md border border-solid bg-zinc-950 border-zinc-800">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb9407e243d333ddb31f7ea63c4b4f17bf3a40512f2618bd4e273f36a39bd23f?apiKey=2a72745ec00444ad9fe2bd2391d98932&"
                      className="w-full aspect-square"
                    />
                  </div>
                  <div className="mt-6 text-2xl font-semibold tracking-normal leading-8 text-zinc-300">
                    Secure for your org
                  </div>
                  <div className="mt-6 text-sm leading-7 text-zinc-300">
                    We keep your data safe by taking top security measures.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-36 text-5xl font-extrabold tracking-tight leading-10 text-center text-neutral-50 w-[672px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-10">
            Instant setup, no custom code
          </div>
          <div className="mt-6 text-lg leading-5 text-center text-zinc-300 w-[672px] max-md:max-w-full">
            Invite the bot, pick a channel, and you're set—no custom code
            needed, and no vendor lock-in.
          </div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/178683b43a0a5f6703ae849df8390aa2d25dfb2b0cdb8c3d7786bb938ba434ee?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/178683b43a0a5f6703ae849df8390aa2d25dfb2b0cdb8c3d7786bb938ba434ee?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/178683b43a0a5f6703ae849df8390aa2d25dfb2b0cdb8c3d7786bb938ba434ee?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/178683b43a0a5f6703ae849df8390aa2d25dfb2b0cdb8c3d7786bb938ba434ee?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/178683b43a0a5f6703ae849df8390aa2d25dfb2b0cdb8c3d7786bb938ba434ee?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/178683b43a0a5f6703ae849df8390aa2d25dfb2b0cdb8c3d7786bb938ba434ee?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/178683b43a0a5f6703ae849df8390aa2d25dfb2b0cdb8c3d7786bb938ba434ee?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/178683b43a0a5f6703ae849df8390aa2d25dfb2b0cdb8c3d7786bb938ba434ee?apiKey=2a72745ec00444ad9fe2bd2391d98932&"
            className="mt-6 max-w-full aspect-[1.61] w-[672px]"
          />
          <div className="mt-36 text-5xl font-extrabold tracking-tight leading-10 text-center text-neutral-50 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            Get in touch
          </div>
          <div className="mt-6 text-lg leading-5 text-center text-neutral-50 max-md:max-w-full">
            Request a demo, or hop on a call.
          </div>
          <div className="flex gap-2 justify-center px-4 py-0.5 mt-6 text-sm font-semibold leading-7 rounded-md bg-neutral-50 text-zinc-900">
            <div>Get started</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9142f7591c6fb7113c3315e928a47304d7c52eb8a55dc6f3bb40c424850de73?apiKey=2a72745ec00444ad9fe2bd2391d98932&"
              className="shrink-0 my-auto w-1 border-2 border-black border-solid aspect-[0.5] stroke-[2px] stroke-black"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center self-stretch px-16 mt-36 w-full leading-7 border-t border-solid border-zinc-800 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 justify-between px-8 w-full max-w-screen-xl max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <div className="flex gap-3 py-2.5 text-base font-medium text-white whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bff2d5360b44a7d54f7cb30cd9264a12dd367a25c58efb0c5720463188368a48?apiKey=2a72745ec00444ad9fe2bd2391d98932&"
              className="shrink-0 my-auto w-5 aspect-[0.87]"
            />
            <div>Pandem</div>
          </div>
          <div className="flex gap-5 justify-between my-auto text-sm text-zinc-300">
            <div>contact us</div>
            <div>terms of service</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyComponent
