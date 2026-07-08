FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

COPY RodriguezYanet/RodriguezYanet.csproj RodriguezYanet/
RUN dotnet restore RodriguezYanet/RodriguezYanet.csproj

COPY RodriguezYanet/ RodriguezYanet/
RUN dotnet publish RodriguezYanet/RodriguezYanet.csproj -c Release -o /app/publish --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
COPY --from=build /app/publish .

EXPOSE 8080
ENTRYPOINT ["sh", "-c", "ASPNETCORE_URLS=http://+:${PORT:-8080} dotnet RodriguezYanet.dll"]
