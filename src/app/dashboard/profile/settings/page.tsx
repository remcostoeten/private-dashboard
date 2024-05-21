import * as React from 'react'

export default function ProfileSettingsPage() {
  return (
    <div className="flex flex-col items-center px-16 pt-11 bg-neutral-900 max-md:px-5">
      <div className="flex flex-col w-full max-w-[1540px] max-md:max-w-full">
        <div className="text-4xl text-gray-200 leading-[56.24px] max-md:max-w-full">
          Project Settings
        </div>
        <div className="self-start mt-14 ml-16 text-lg leading-7 text-center text-neutral-500 max-md:mt-10 max-md:ml-2.5">
          Webhooks
        </div>
        <div className="shrink-0 mt-5 ml-2.5 h-px bg-white w-[61px]" />
        <div className="shrink-0 h-0.5 bg-neutral-800 max-md:max-w-full" />
        <div className="flex flex-col items-start px-5 py-8 mt-5 rounded-xl border border-solid bg-zinc-900 border-zinc-800 max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 self-stretch w-full max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto text-2xl leading-9 text-gray-200">
              Project Name
            </div>
            <div className="flex gap-2.5 self-start text-lg leading-7 text-center text-gray-300 max-md:flex-wrap max-md:max-w-full">
              <div className="justify-center items-start py-1.5 rounded-lg border border-solid bg-neutral-700 border-neutral-700">
                Copy Project Slug
              </div>
              <div className="justify-center items-start py-1.5 rounded-lg border border-solid bg-neutral-700 border-neutral-700">
                Copy Project ID
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center mt-10 max-w-full rounded-lg border border-solid bg-neutral-900 border-neutral-700 w-[560px] max-md:mt-10">
            <div className="shrink-0 rounded-lg bg-neutral-800 h-[45px] max-md:max-w-full" />
          </div>
          <div className="justify-center py-2 mt-8 text-lg leading-7 text-center text-gray-300 whitespace-nowrap rounded-lg border border-solid bg-neutral-700 border-neutral-700">
            Save
          </div>
        </div>
        <div className="flex flex-col px-5 py-7 mt-7 rounded-xl border border-solid bg-zinc-900 border-zinc-800 max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 items-start max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto text-2xl leading-9 text-gray-200">
              Environments
            </div>
            <div className="justify-center items-start py-2 text-lg leading-7 text-center text-gray-300 rounded-lg border border-solid bg-neutral-700 border-neutral-700">
              Create environment
            </div>
          </div>
          <div className="mt-14 text-xl leading-8 text-gray-400 max-md:mt-10 max-md:max-w-full">
            Choose which environments will show up in your dashboard like
            development, staging, production
          </div>
          <div className="flex flex-col pt-px pb-6 mt-11 rounded-xl border border-solid bg-neutral-800 border-zinc-800 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-0 px-px text-base leading-6 uppercase whitespace-nowrap bg-neutral-800 text-neutral-400 max-md:flex-wrap max-md:max-w-full">
              <div className="justify-center items-start p-6 bg-neutral-800 max-md:px-5 max-md:max-w-full">
                Name
              </div>
              <div className="justify-center items-start p-6 bg-neutral-800 max-md:px-5">
                Slug
              </div>
              <div className="shrink-0 max-w-full bg-neutral-800 h-[61px] w-[628px]" />
            </div>
            <div className="flex gap-0 max-md:flex-wrap max-md:max-w-full">
              <div className="flex flex-col grow shrink-0 self-start text-lg leading-7 text-gray-300 whitespace-nowrap basis-0 w-fit max-md:max-w-full">
                <div className="shrink-0 h-px bg-zinc-800 max-md:max-w-full" />
                <div className="self-start mt-7 ml-6 max-md:ml-2.5">
                  Development
                </div>
              </div>
              <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                <div className="flex gap-0 px-px max-md:flex-wrap">
                  <div className="shrink-0 max-w-full h-px bg-zinc-800 w-[357px]" />
                  <div className="shrink-0 max-w-full h-px bg-zinc-800 w-[628px]" />
                </div>
                <div className="flex gap-5 justify-between px-px mx-7 mt-6 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
                  <div className="my-auto text-lg leading-7 text-gray-300">
                    dev
                  </div>
                  <div className="flex gap-5 justify-between items-start">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4610b320a4070fd2ab0c8327e08f7176a879fbc5509951a9bf8d362e12665848?apiKey=2a72745ec00444ad9fe2bd2391d98932&"
                      className="shrink-0 aspect-[0.81] fill-black w-[13px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8dff7befd4f3237704a6e9c10c71ea92ebecd47edce0a08275456b79e3972eb2?apiKey=2a72745ec00444ad9fe2bd2391d98932&"
                      className="shrink-0 aspect-[0.81] fill-black w-[13px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6c5bf857db5ef1b6e72196ff9c19f2e3d3a1b897b72710a76e7a4f9f429363f?apiKey=2a72745ec00444ad9fe2bd2391d98932&"
                      className="shrink-0 self-stretch aspect-square fill-black w-[18px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/274539ea54f7513ef97bdf709d2770b6b81fe726afb5484aa4c6cafd51ea515c?apiKey=2a72745ec00444ad9fe2bd2391d98932&"
                      className="shrink-0 aspect-square fill-black w-[15px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="shrink-0 mt-6 h-px bg-zinc-800 max-md:max-w-full" />
            <div className="flex gap-5 justify-between mt-6 mr-7 ml-7 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
              <div className="text-lg leading-7 text-gray-300">Staging</div>
              <div className="text-lg leading-7 text-gray-300">staging</div>
              <div className="flex gap-5 justify-between items-start">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4610b320a4070fd2ab0c8327e08f7176a879fbc5509951a9bf8d362e12665848?apiKey=2a72745ec00444ad9fe2bd2391d98932&"
                  className="shrink-0 aspect-[0.81] fill-black w-[13px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8dff7befd4f3237704a6e9c10c71ea92ebecd47edce0a08275456b79e3972eb2?apiKey=2a72745ec00444ad9fe2bd2391d98932&"
                  className="shrink-0 aspect-[0.81] fill-black w-[13px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6c5bf857db5ef1b6e72196ff9c19f2e3d3a1b897b72710a76e7a4f9f429363f?apiKey=2a72745ec00444ad9fe2bd2391d98932&"
                  className="shrink-0 self-stretch aspect-square fill-black w-[18px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/274539ea54f7513ef97bdf709d2770b6b81fe726afb5484aa4c6cafd51ea515c?apiKey=2a72745ec00444ad9fe2bd2391d98932&"
                  className="shrink-0 aspect-square fill-black w-[15px]"
                />
              </div>
            </div>
            <div className="shrink-0 mt-6 h-px bg-zinc-800 max-md:max-w-full" />
            <div className="flex gap-5 justify-between mt-6 mr-7 ml-7 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
              <div className="text-lg leading-7 text-gray-300">Production</div>
              <div className="text-lg leading-7 text-gray-300">prod</div>
              <div className="flex gap-5 justify-between">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4610b320a4070fd2ab0c8327e08f7176a879fbc5509951a9bf8d362e12665848?apiKey=2a72745ec00444ad9fe2bd2391d98932&"
                  className="shrink-0 self-start aspect-[0.81] fill-black w-[13px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8dff7befd4f3237704a6e9c10c71ea92ebecd47edce0a08275456b79e3972eb2?apiKey=2a72745ec00444ad9fe2bd2391d98932&"
                  className="shrink-0 self-start aspect-[0.81] fill-black w-[13px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6c5bf857db5ef1b6e72196ff9c19f2e3d3a1b897b72710a76e7a4f9f429363f?apiKey=2a72745ec00444ad9fe2bd2391d98932&"
                  className="shrink-0 aspect-square fill-black w-[18px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/274539ea54f7513ef97bdf709d2770b6b81fe726afb5484aa4c6cafd51ea515c?apiKey=2a72745ec00444ad9fe2bd2391d98932&"
                  className="shrink-0 my-auto aspect-square fill-black w-[15px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="shrink-0 mt-8 rounded-xl border border-solid bg-zinc-900 border-zinc-800 h-[18px] max-md:max-w-full" />
      </div>
    </div>
  )
}
