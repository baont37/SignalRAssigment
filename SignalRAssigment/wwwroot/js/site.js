// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

"use strict";

// Write your JavaScript code.
$(() => {
    LoadProdData();

    var connection = new signalR.HubConnectionBuilder().withUrl("/signalrServer").build();

    connection.on("LoadPosts", function () {
        LoadProdData();
    })

    connection.start();

    function LoadProdData() {
        var tr = '';

        $.ajax({
            url: '/Posts/GetPosts',
            method: 'GET',
            success: (result) => {
                $.each(result, (k, v) => {
                    tr += `
                        <tr>
                            <td>${v.postID}</td>
                            <td>${v.createdDate}</td>
                            <td>${v.updatedDate}</td>
                            <td>${v.title}</td>
                            <td>${v.content}</td>
                            <td>${v.publishStatus}</td>
                            <td>${v.category}</td>
                            <td>${v.author}</td>
                            <td>
                                <a href='../Posts/Edit?id=${v.postID}'> Edit </a> |
                                <a href='../Posts/Details?id=${v.postID}'> Details </a> |
                                <a href='../Posts/Delete?id=${v.postID}'> Delete </a>
                            </td>
                        </tr>
                    `
                    console.log(k, v)
                })

                $("#tableBody").html(tr);
            },
            error: (error) => {
                console.log(error)
            }
        })
    }
})